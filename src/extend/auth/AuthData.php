<?php
/**
 * User: Yirius
 * Date: 2018/6/28
 * Time: 16:04
 */

namespace icesadmin\extend\auth;


class AuthData
{
    /**
     * @title 根据传参,直接运算出一个含有子菜单的层级
     * @description 根据传参,直接运算出一个含有子菜单的层级
     * @createtime: 2018/7/10 23:31
     * @param array $data 操作的数组 true '' ''
     * @param int $pid 一级PID的值,正常是0,个别情况下是1 false '' ''
     * @param string $fieldPri 唯一键名，如果是表则是表的主键 false id ''
     * @param string $fieldPid 父ID键名,就是能够找到上一个层级的id false pid ''
     * @param int $level 不需要传参数（执行时调用） false 1 ''
     * @param string $childname 不需要传参数,如果children名称有变化,可以传该参数 false list ''
     * @return array
     */
    static public function channelLevel($data, $pid = 0, $fieldPri = 'id', $fieldPid = 'pid', $level = 1, $childname = "list")
    {
        if (empty($data)) {
            return [];
        }
        $arr = [];
        foreach ($data as $v) {
            if ($v[$fieldPid] == $pid) {
                $arr[$v[$fieldPri]] = $v;
                $arr[$v[$fieldPri]][$childname] = self::channelLevel($data, $v[$fieldPri], $fieldPri, $fieldPid, $level + 1, $childname);
            }
        }
        return $arr;
    }

    /**
     * @title 获取到层级的所有列表
     * @description 获取到层级的所有列表
     * @createtime: 2018/7/10 23:35
     * @param array $data 栏目数据 true '' ''
     * @param int $pid 一级PID的值,正常是0,个别情况下是1 false '' ''
     * @param string $html 栏目名前字符
     * @param string $fieldPri 唯一键名，如果是表则是表的主键 false id ''
     * @param string $fieldPid 父ID键名,就是能够找到上一个层级的id false pid ''
     * @param int $level 不需要传参数（执行时调用） false 1 ''
     * @return array
     */
    static public function channelList($data, $pid = 0, $html = "&nbsp;", $fieldPri = 'id', $fieldPid = 'pid', $level = 1)
    {
        $data = self::_channelList($data, $pid, $html, $fieldPri, $fieldPid, $level);
        if (empty($data))
            return $data;
        foreach ($data as $n => $m) {
            if ($m['_level'] == 1)
                continue;
            $data[$n]['_first'] = false;
            $data[$n]['_end'] = false;
            if (!isset($data[$n - 1]) || $data[$n - 1]['_level'] != $m['_level']) {
                $data[$n]['_first'] = true;
            }
            if (isset($data[$n + 1]) && $data[$n]['_level'] > $data[$n + 1]['_level']) {
                $data[$n]['_end'] = true;
            }
        }
        //更新key为栏目主键
        $category = [];
        foreach ($data as $d) {
            $category[$d[$fieldPri]] = $d;
        }
        return $category;
    }

    //只供channelList方法使用
    static private function _channelList($data, $pid = 0, $html = "&nbsp;", $fieldPri = 'id', $fieldPid = 'pid', $level = 1)
    {
        if (empty($data))
            return [];
        $arr = [];
        foreach ($data as $v) {
            $id = $v[$fieldPri];
            if ($v[$fieldPid] == $pid) {
                $v['_level'] = $level;
                $v['_html'] = str_repeat($html, $level - 1);
                array_push($arr, $v);
                $tmp = self::_channelList($data, $id, $html, $fieldPri, $fieldPid, $level + 1);
                $arr = array_merge($arr, $tmp);
            }
        }
        return $arr;
    }

    /**
     * @title 获取树状列表结构的内容
     * @description 获取树状列表结构的内容
     * @createtime: 2018/7/10 23:37
     * @param array $data 数据 true '' ''
     * @param string $title 字段名,用来显示tree的名称 true '' ''
     * @param string $fieldPri 唯一键名，如果是表则是表的主键 false id ''
     * @param string $fieldPid 父ID键名,就是能够找到上一个层级的id false pid ''
     * @return array
     */
    static public function tree($data, $title, $fieldPri = 'id', $fieldPid = 'pid')
    {
        if (!is_array($data) || empty($data))
            return [];
        $arr = AuthData::channelList($data, 0, '', $fieldPri, $fieldPid);
        foreach ($arr as $k => $v) {
            $str = "";
            if ($v['_level'] > 2) {
                for ($i = 1; $i < $v['_level'] - 1; $i++) {
                    $str .= "   │";
                }
            }
            if ($v['_level'] != 1) {
                $t = $title ? $v[$title] : "";
                if (isset($arr[$k + 1]) && $arr[$k + 1]['_level'] >= $arr[$k]['_level']) {
                    $arr[$k]['_name'] = $str . "    ├─ " . $v['_html'] . $t;
                } else {
                    $arr[$k]['_name'] = $str . "    └─ " . $v['_html'] . $t;
                }
            } else {
                $arr[$k]['_name'] = $v[$title];
            }
            if(!empty($v[$fieldPid])){
                $arr[$v[$fieldPid]]['_child'] = true;
            }
        }
        //设置主键为$fieldPri
        $data = [];
        foreach ($arr as $d) {
            $data[$d[$fieldPri]] = $d;
        }
        return $data;
    }

    /**
     * 获得所有父级栏目
     * @param array $data 栏目数据
     * @param int $sid 子栏目
     * @param string $fieldPri 唯一键名，如果是表则是表的主键
     * @param string $fieldPid 父ID键名
     * @return array
     */
    static public function parentChannel($data, $sid, $fieldPri = 'id', $fieldPid = 'pid')
    {
        if (empty($data)) {
            return $data;
        } else {
            $arr = array();
            foreach ($data as $v) {
                if ($v[$fieldPri] == $sid) {
                    $arr[] = $v;
                    $_n = self::parentChannel($data, $v[$fieldPid], $fieldPri, $fieldPid);
                    if (!empty($_n)) {
                        $arr = array_merge($arr, $_n);
                    }
                }
            }
            return $arr;
        }
    }

    /**
     * 判断$s_cid是否是$d_cid的子栏目
     * @param array $data 栏目数据
     * @param int $sid 子栏目id
     * @param int $pid 父栏目id
     * @param string $fieldPri 主键
     * @param string $fieldPid 父id字段
     * @return bool
     */
    static function isChild($data, $sid, $pid, $fieldPri = 'id', $fieldPid = 'pid')
    {
        $_data = self::channelList($data, $pid, '', $fieldPri, $fieldPid);
        foreach ($_data as $c) {
            //目标栏目为源栏目的子栏目
            if ($c[$fieldPri] == $sid)
                return true;
        }
        return false;
    }

    /**
     * 检测是不否有子栏目
     * @param array $data 栏目数据
     * @param int $cid 要判断的栏目cid
     * @param string $fieldPid 父id表字段名
     * @return bool
     */
    static function hasChild($data, $cid, $fieldPid = 'pid')
    {
        foreach ($data as $d) {
            if ($d[$fieldPid] == $cid) return true;
        }
        return false;
    }

    /**
     * 递归实现迪卡尔乘积
     * @param array $arr 操作的数组
     * @param array $tmp
     * @return array
     */
    static function descarte($arr, $tmp = array())
    {
        static $n_arr = array();
        foreach (array_shift($arr) as $v) {
            $tmp[] = $v;
            if ($arr) {
                self::descarte($arr, $tmp);
            } else {
                $n_arr[] = $tmp;
            }
            array_pop($tmp);
        }
        return $n_arr;
    }
}
