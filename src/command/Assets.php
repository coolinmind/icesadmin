<?php
/**
 * User: Yirius
 * Date: 2018/1/7
 * Time: 22:22
 */

namespace icesadmin\command;


use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Env;

class Assets extends Command
{
    protected function configure()
    {
        $this
            ->setName('ices:assets')
            ->setDescription('this will copy assets/ to public/');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->comment("start copy static/");
        $this->copy_dir(dirname(ices_root) . "/assets/", Env::get("root_path"). "/public/");
        if(is_dir(Env::get("root_path"). "/public/app/")){
            $output->comment("copy to public/ success");
        }
    }

    protected function copy_dir($src, $dst) {
        $dir = opendir($src);
        @mkdir($dst);
        while(false !== ( $file = readdir($dir)) ) {
            if (( $file != '.' ) && ( $file != '..' )) {
                if ( is_dir($src . '/' . $file) ) {
                    $this->copy_dir($src . '/' . $file,$dst . '/' . $file);
                    continue;
                }
                else {
                    copy($src . '/' . $file,$dst . '/' . $file);
                }
            }
        }
        closedir($dir);
    }
}
