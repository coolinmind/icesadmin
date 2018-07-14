/** layui-v2.3.0 MIT License By https://www.layui.com */
 ;!function(t,i){function a(t,i,a){this.init.call(this,t,i,a)}function e(t,i,a){t.call(this,i,a),this.chart.polar&&(this.closeSegment=function(t){var i=this.xAxis.center;t.push("L",i[0],i[1])},this.closedStacks=!0)}function o(t,i){var a,e=this.chart,o=this.options.animation,n=this.group,r=this.markerGroup,s=this.xAxis.center,l=e.plotLeft,h=e.plotTop;e.polar?e.renderer.isSVG&&(o===!0&&(o={}),i?(a={translateX:s[0]+l,translateY:s[1]+h,scaleX:.001,scaleY:.001},n.attr(a),r&&(r.attrSetters=n.attrSetters,r.attr(a))):(a={translateX:l,translateY:h,scaleX:1,scaleY:1},n.animate(a,o),r&&r.animate(a,o),this.animate=null)):t.call(this,i)}var n=t.arrayMin,r=t.arrayMax,s=t.each,l=t.extend,h=t.merge,p=t.map,c=t.pick,d=t.pInt,u=t.getOptions().plotOptions,g=t.seriesTypes,f=t.extendClass,m=t.splat,y=t.wrap,x=t.Axis,b=t.Tick,A=t.Series,w=g.column.prototype,P=Math,v=P.round,L=P.floor,M=P.max,k=function(){};l(a.prototype,{init:function(t,i,a){var e,o=this,n=o.defaultOptions;o.chart=i,i.angular&&(n.background={}),o.options=t=h(n,t),e=t.background,e&&s([].concat(m(e)).reverse(),function(t){var i=t.backgroundColor;t=h(o.defaultBackgroundOptions,t),i&&(t.backgroundColor=i),t.color=t.backgroundColor,a.options.plotBands.unshift(t)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var C=x.prototype,S=b.prototype,R={getOffset:k,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:k,setCategories:k,setTitle:k},X={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,plotBands:[],tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,plotBands:[],showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},plotBands:[],showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(t){this.options=h(this.defaultOptions,this.defaultRadialOptions,t)},getOffset:function(){C.getOffset.call(this),this.chart.axisOffset[this.side]=0},getLinePath:function(t,i){var a=this.center;return i=c(i,a[2]/2-this.offset),this.chart.renderer.symbols.arc(this.left+a[0],this.top+a[1],i,i,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){C.setAxisTranslation.call(this),this.center&&(this.isCircular?this.transA=(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.transA=this.center[2]/2/(this.max-this.min||1),this.isXAxis&&(this.minPixelPadding=this.transA*this.minPointOffset+(this.reversed?(this.endAngleRad-this.startAngleRad)/4:0)))},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){C.setAxisSize.call(this),this.isRadial&&(this.center=this.pane.center=g.pie.prototype.getCenter.call(this.pane),this.len=this.width=this.height=this.isCircular?this.center[2]*(this.endAngleRad-this.startAngleRad)/2:this.center[2]/2)},getPosition:function(t,i){return this.isCircular||(i=this.translate(t),t=this.min),this.postTranslate(this.translate(t),c(i,this.center[2]/2)-this.offset)},postTranslate:function(t,i){var a=this.chart,e=this.center;return t=this.startAngleRad+t,{x:a.plotLeft+e[0]+Math.cos(t)*i,y:a.plotTop+e[1]+Math.sin(t)*i}},getPlotBandPath:function(t,i,a){var e,o,n,r,s=this.center,l=this.startAngleRad,h=s[2]/2,u=[c(a.outerRadius,"100%"),a.innerRadius,c(a.thickness,10)],g=/%$/,f=this.isCircular;return"polygon"===this.options.gridLineInterpolation?r=this.getPlotLinePath(t).concat(this.getPlotLinePath(i,!0)):(f||(u[0]=this.translate(t),u[1]=this.translate(i)),u=p(u,function(t){return g.test(t)&&(t=d(t,10)*h/100),t}),"circle"!==a.shape&&f?(e=l+this.translate(t),o=l+this.translate(i)):(e=-Math.PI/2,o=1.5*Math.PI,n=!0),r=this.chart.renderer.symbols.arc(this.left+s[0],this.top+s[1],u[0],u[0],{start:e,end:o,innerR:c(u[1],u[0]-u[2]),open:n})),r},getPlotLinePath:function(t,i){var a,e,o,n,r=this,l=r.center,h=r.chart,p=r.getPosition(t);return r.isCircular?n=["M",l[0]+h.plotLeft,l[1]+h.plotTop,"L",p.x,p.y]:"circle"===r.options.gridLineInterpolation?(t=r.translate(t),t&&(n=r.getLinePath(0,t))):(a=h.xAxis[0],n=[],t=r.translate(t),o=a.tickPositions,a.autoConnect&&(o=o.concat([o[0]])),i&&(o=[].concat(o).reverse()),s(o,function(i,o){e=a.getPosition(i,t),n.push(o?"L":"M",e.x,e.y)})),n},getTitlePosition:function(){var t=this.center,i=this.chart,a=this.options.title;return{x:i.plotLeft+t[0]+(a.x||0),y:i.plotTop+t[1]-{high:.5,middle:.25,low:0}[a.align]*t[2]+(a.y||0)}}};y(C,"init",function(t,e,o){var n,r,s,p,d,u,g=this,f=e.angular,y=e.polar,x=o.isX,b=f&&x,A=e.options,w=o.pane||0;f?(l(this,b?R:X),n=!x,n&&(this.defaultRadialOptions=this.defaultRadialGaugeOptions)):y&&(l(this,X),n=x,this.defaultRadialOptions=x?this.defaultRadialXOptions:h(this.defaultYAxisOptions,this.defaultRadialYOptions)),t.call(this,e,o),b||!f&&!y||(p=this.options,e.panes||(e.panes=[]),this.pane=d=e.panes[w]=e.panes[w]||new a(m(A.pane)[w],e,g),u=d.options,e.inverted=!1,A.chart.zoomType=null,this.startAngleRad=r=(u.startAngle-90)*Math.PI/180,this.endAngleRad=s=(c(u.endAngle,u.startAngle+360)-90)*Math.PI/180,this.offset=p.offset||0,this.isCircular=n,n&&o.max===i&&s-r===2*Math.PI&&(this.autoConnect=!0))}),y(S,"getPosition",function(t,i,a,e,o){var n=this.axis;return n.getPosition?n.getPosition(a):t.call(this,i,a,e,o)}),y(S,"getLabelPosition",function(t,i,a,e,o,n,r,s,l){var h,p=this.axis,u=n.y,g=n.align,f=(p.translate(this.pos)+p.startAngleRad+Math.PI/2)/Math.PI*180%360;return p.isRadial?(h=p.getPosition(this.pos,p.center[2]/2+c(n.distance,-25)),"auto"===n.rotation?e.attr({rotation:f}):null===u&&(u=.9*d(e.styles.lineHeight)-e.getBBox().height/2),null===g&&(g=p.isCircular?f>20&&f<160?"left":f>200&&f<340?"right":"center":"center",e.attr({align:g})),h.x+=n.x,h.y+=u):h=t.call(this,i,a,e,o,n,r,s,l),h}),y(S,"getMarkPath",function(t,i,a,e,o,n,r){var s,l,h=this.axis;return h.isRadial?(s=h.getPosition(this.pos,h.center[2]/2+e),l=["M",i,a,"L",s.x,s.y]):l=t.call(this,i,a,e,o,n,r),l}),u.arearange=h(u.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}}),g.arearange=t.extendClass(g.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(t){return[t.low,t.high]},pointValKey:"low",getSegments:function(){var t=this;s(t.points,function(i){t.options.connectNulls||null!==i.low&&null!==i.high?null===i.low&&null!==i.high&&(i.y=i.high):i.y=null}),A.prototype.getSegments.call(this)},translate:function(){var t=this,i=t.yAxis;g.area.prototype.translate.apply(t),s(t.points,function(t){var a=t.low,e=t.high,o=t.plotY;null===e&&null===a?t.y=null:null===a?(t.plotLow=t.plotY=null,t.plotHigh=i.translate(e,0,1,0,1)):null===e?(t.plotLow=o,t.plotHigh=null):(t.plotLow=o,t.plotHigh=i.translate(e,0,1,0,1))})},getSegmentPath:function(t){var i,a,e,o,n,r=[],s=t.length,l=A.prototype.getSegmentPath,h=this.options,p=h.step;for(i=HighchartsAdapter.grep(t,function(t){return null!==t.plotLow});s--;)a=t[s],null!==a.plotHigh&&r.push({plotX:a.plotX,plotY:a.plotHigh});return o=l.call(this,i),p&&(p===!0&&(p="left"),h.step={left:"right",center:"center",right:"left"}[p]),n=l.call(this,r),h.step=p,e=[].concat(o,n),n[0]="L",this.areaPath=this.areaPath.concat(o,n),e},drawDataLabels:function(){var t,i,a=this.data,e=a.length,o=[],n=A.prototype,r=this.options.dataLabels,s=this.chart.inverted;if(r.enabled||this._hasPointLabels){for(t=e;t--;)i=a[t],i.y=i.high,i.plotY=i.plotHigh,o[t]=i.dataLabel,i.dataLabel=i.dataLabelUpper,i.below=!1,s?(r.align="left",r.x=r.xHigh):r.y=r.yHigh;for(n.drawDataLabels.apply(this,arguments),t=e;t--;)i=a[t],i.dataLabelUpper=i.dataLabel,i.dataLabel=o[t],i.y=i.low,i.plotY=i.plotLow,i.below=!0,s?(r.align="right",r.x=r.xLow):r.y=r.yLow;n.drawDataLabels.apply(this,arguments)}},alignDataLabel:g.column.prototype.alignDataLabel,getSymbol:g.column.prototype.getSymbol,drawPoints:k}),u.areasplinerange=h(u.arearange),g.areasplinerange=f(g.arearange,{type:"areasplinerange",getPointSpline:g.spline.prototype.getPointSpline}),u.columnrange=h(u.column,u.arearange,{lineWidth:1,pointRange:null}),g.columnrange=f(g.arearange,{type:"columnrange",translate:function(){var t,i=this,a=i.yAxis;w.translate.apply(i),s(i.points,function(e){var o,n,r,s=e.shapeArgs,l=i.options.minPointLength;e.plotHigh=t=a.translate(e.high,0,1,0,1),e.plotLow=e.plotY,r=t,n=e.plotY-t,n<l&&(o=l-n,n+=o,r-=o/2),s.height=n,s.y=r})},trackerGroups:["group","dataLabels"],drawGraph:k,pointAttrToOptions:w.pointAttrToOptions,drawPoints:w.drawPoints,drawTracker:w.drawTracker,animate:w.animate,getColumnMetrics:w.getColumnMetrics}),u.gauge=h(u.line,{dataLabels:{enabled:!0,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});var Y=t.extendClass(t.Point,{setState:function(t){this.state=t}}),T={type:"gauge",pointClass:Y,angular:!0,drawGraph:k,fixedBox:!0,trackerGroups:["group","dataLabels"],translate:function(){var t=this,i=t.yAxis,a=t.options,e=i.center;t.generatePoints(),s(t.points,function(t){var o=h(a.dial,t.dial),n=d(c(o.radius,80))*e[2]/200,r=d(c(o.baseLength,70))*n/100,s=d(c(o.rearLength,10))*n/100,l=o.baseWidth||3,p=o.topWidth||1,u=i.startAngleRad+i.translate(t.y,null,null,null,!0);a.wrap===!1&&(u=Math.max(i.startAngleRad,Math.min(i.endAngleRad,u))),u=180*u/Math.PI,t.shapeType="path",t.shapeArgs={d:o.path||["M",-s,-l/2,"L",r,-l/2,n,-p/2,n,p/2,r,l/2,-s,l/2,"z"],translateX:e[0],translateY:e[1],rotation:u},t.plotX=e[0],t.plotY=e[1]})},drawPoints:function(){var t=this,i=t.yAxis.center,a=t.pivot,e=t.options,o=e.pivot,n=t.chart.renderer;s(t.points,function(i){var a=i.graphic,o=i.shapeArgs,r=o.d,s=h(e.dial,i.dial);a?(a.animate(o),o.d=r):i.graphic=n[i.shapeType](o).attr({stroke:s.borderColor||"none","stroke-width":s.borderWidth||0,fill:s.backgroundColor||"black",rotation:o.rotation}).add(t.group)}),a?a.animate({translateX:i[0],translateY:i[1]}):t.pivot=n.circle(0,0,c(o.radius,5)).attr({"stroke-width":o.borderWidth||0,stroke:o.borderColor||"silver",fill:o.backgroundColor||"black"}).translate(i[0],i[1]).add(t.group)},animate:function(t){var i=this;t||(s(i.points,function(t){var a=t.graphic;a&&(a.attr({rotation:180*i.yAxis.startAngleRad/Math.PI}),a.animate({rotation:t.shapeArgs.rotation},i.options.animation))}),i.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup),g.pie.prototype.render.call(this),this.group.clip(this.chart.clipRect)},setData:g.pie.prototype.setData,drawTracker:g.column.prototype.drawTracker};g.gauge=t.extendClass(g.line,T),u.boxplot=h(u.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2}),g.boxplot=f(g.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(t){return[t.low,t.q1,t.median,t.q3,t.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:k,translate:function(){var t=this,i=t.yAxis,a=t.pointArrayMap;g.column.prototype.translate.apply(t),s(t.points,function(t){s(a,function(a){null!==t[a]&&(t[a+"Plot"]=i.translate(t[a],0,1,0,1))})})},drawPoints:function(){var t,a,e,o,n,r,l,h,p,d,u,g,f,m,y,x,b,A,w,P,M,k,C=this,S=C.points,R=C.options,X=C.chart,Y=X.renderer,T=C.doQuartiles!==!1,W=parseInt(C.options.whiskerLength,10)/100;s(S,function(s){p=s.graphic,M=s.shapeArgs,u={},m={},x={},k=s.color||C.color,s.plotY!==i&&(t=s.pointAttr[s.selected?"selected":""],b=M.width,A=L(M.x),w=A+b,P=v(b/2),a=L(T?s.q1Plot:s.lowPlot),e=L(T?s.q3Plot:s.lowPlot),o=L(s.highPlot),n=L(s.lowPlot),u.stroke=s.stemColor||R.stemColor||k,u["stroke-width"]=c(s.stemWidth,R.stemWidth,R.lineWidth),u.dashstyle=s.stemDashStyle||R.stemDashStyle,m.stroke=s.whiskerColor||R.whiskerColor||k,m["stroke-width"]=c(s.whiskerWidth,R.whiskerWidth,R.lineWidth),x.stroke=s.medianColor||R.medianColor||k,x["stroke-width"]=c(s.medianWidth,R.medianWidth,R.lineWidth),l=u["stroke-width"]%2/2,h=A+P+l,d=["M",h,e,"L",h,o,"M",h,a,"L",h,n,"z"],T&&(l=t["stroke-width"]%2/2,h=L(h)+l,a=L(a)+l,e=L(e)+l,A+=l,w+=l,g=["M",A,e,"L",A,a,"L",w,a,"L",w,e,"L",A,e,"z"]),W&&(l=m["stroke-width"]%2/2,o+=l,n+=l,f=["M",h-P*W,o,"L",h+P*W,o,"M",h-P*W,n,"L",h+P*W,n]),l=x["stroke-width"]%2/2,r=v(s.medianPlot)+l,y=["M",A,r,"L",w,r,"z"],p?(s.stem.animate({d:d}),W&&s.whiskers.animate({d:f}),T&&s.box.animate({d:g}),s.medianShape.animate({d:y})):(s.graphic=p=Y.g().add(C.group),s.stem=Y.path(d).attr(u).add(p),W&&(s.whiskers=Y.path(f).attr(m).add(p)),T&&(s.box=Y.path(g).attr(t).add(p)),s.medianShape=Y.path(y).attr(x).add(p)))})}}),u.errorbar=h(u.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:u.arearange.tooltip.pointFormat},whiskerWidth:null}),g.errorbar=f(g.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(t){return[t.low,t.high]},pointValKey:"high",doQuartiles:!1,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||g.column.prototype.getColumnMetrics.call(this)}}),u.waterfall=h(u.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333"}),g.waterfall=f(g.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",init:function(t,i){i.stacking=!0,g.column.prototype.init.call(this,t,i)},translate:function(){var t,i,a,e,o,n,r,s,l,h=this,p=h.options,c=h.yAxis,d=p.threshold,u=p.borderWidth%2/2;for(g.column.prototype.translate.apply(this),s=d,a=h.points,i=0,t=a.length;i<t;i++)e=a[i],o=e.shapeArgs,n=h.getStack(i),l=n.points[h.index],isNaN(e.y)&&(e.y=h.yData[i]),r=M(s,s+e.y)+l[0],o.y=c.translate(r,0,1),e.isSum||e.isIntermediateSum?(o.y=c.translate(l[1],0,1),o.height=c.translate(l[0],0,1)-o.y):s+=n.total,o.height<0&&(o.y+=o.height,o.height*=-1),e.plotY=o.y=v(o.y)-u,o.height=v(o.height),e.yBottom=o.y+o.height},processData:function(t){var i,a,e,o,n,r,s,l=this,h=l.options,p=l.yData,c=l.points,d=p.length,u=h.threshold||0;for(e=a=o=n=u,s=0;s<d;s++)r=p[s],i=c&&c[s]?c[s]:{},"sum"===r||i.isSum?p[s]=e:"intermediateSum"===r||i.isIntermediateSum?(p[s]=a,a=u):(e+=r,a+=r),o=Math.min(e,o),n=Math.max(e,n);A.prototype.processData.call(this,t),l.dataMin=o,l.dataMax=n},toYData:function(t){return t.isSum?"sum":t.isIntermediateSum?"intermediateSum":t.y},getAttribs:function(){g.column.prototype.getAttribs.apply(this,arguments);var i=this,a=i.options,e=a.states,o=a.upColor||i.color,n=t.Color(o).brighten(.1).get(),r=h(i.pointAttr),l=i.upColorProp;r[""][l]=o,r.hover[l]=e.hover.upColor||n,r.select[l]=e.select.upColor||o,s(i.points,function(t){t.y>0&&!t.color&&(t.pointAttr=r,t.color=o)})},getGraphPath:function(){var t,i,a,e,o=this.data,n=o.length,r=this.options.lineWidth+this.options.borderWidth,s=v(r)%2/2,l=[],h="M",p="L";for(a=1;a<n;a++)i=o[a].shapeArgs,t=o[a-1].shapeArgs,e=[h,t.x+t.width,t.y+s,p,i.x,t.y+s],o[a-1].y<0&&(e[2]+=t.height,e[5]+=t.height),l=l.concat(e);return l},getExtremes:k,getStack:function(t){var i=this.yAxis,a=i.stacks,e=this.stackKey;return this.processedYData[t]<this.options.threshold&&(e="-"+e),a[e][t]},drawGraph:A.prototype.drawGraph}),u.bubble=h(u.scatter,{dataLabels:{inside:!0,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0}),g.bubble=f(g.scatter,{type:"bubble",pointArrayMap:["y","z"],trackerGroups:["group","dataLabelsGroup"],pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(i){var a=this.options.marker,e=c(a.fillOpacity,.5);return i=i||a.fillColor||this.color,1!==e&&(i=t.Color(i).setOpacity(e).get("rgba")),i},convertAttribs:function(){var t=A.prototype.convertAttribs.apply(this,arguments);return t.fill=this.applyOpacity(t.fill),t},getRadii:function(t,i,a,e){var o,n,r,s,l=this.zData,h=[];for(n=0,o=l.length;n<o;n++)s=i-t,r=s>0?(l[n]-t)/(i-t):.5,h.push(P.ceil(a+r*(e-a))/2);this.radii=h},animate:function(t){var i=this.options.animation;t||(s(this.points,function(t){var a=t.graphic,e=t.shapeArgs;a&&e&&(a.attr("r",1),a.animate({r:e.r},i))}),this.animate=null)},translate:function(){var t,a,e,o=this.data,n=this.radii;for(g.scatter.prototype.translate.call(this),t=o.length;t--;)a=o[t],e=n?n[t]:0,a.negative=a.z<(this.options.zThreshold||0),e>=this.minPxSize/2?(a.shapeType="circle",a.shapeArgs={x:a.plotX,y:a.plotY,r:e},a.dlBox={x:a.plotX-e,y:a.plotY-e,width:2*e,height:2*e}):a.shapeArgs=a.plotY=a.dlBox=i},drawLegendSymbol:function(t,i){var a=d(t.itemStyle.fontSize)/2;i.legendSymbol=this.chart.renderer.circle(a,t.baseline-a,a).attr({zIndex:3}).add(i.legendGroup),i.legendSymbol.isMarker=!0},drawPoints:g.column.prototype.drawPoints,alignDataLabel:g.column.prototype.alignDataLabel}),x.prototype.beforePadding=function(){var t=this,a=this.len,e=this.chart,o=0,l=a,h=this.isXAxis,p=h?"xData":"yData",u=this.min,g={},f=P.min(e.plotWidth,e.plotHeight),m=Number.MAX_VALUE,y=-Number.MAX_VALUE,x=this.max-u,b=a/x,A=[];this.tickPositions&&(s(this.series,function(i){var a,e=i.options;"bubble"===i.type&&i.visible&&(t.allowZoomOutside=!0,A.push(i),h&&(s(["minSize","maxSize"],function(t){var i=e[t],a=/%$/.test(i);i=d(i),g[t]=a?f*i/100:i}),i.minPxSize=g.minSize,a=i.zData,a.length&&(m=P.min(m,P.max(n(a),e.displayNegative===!1?e.zThreshold:-Number.MAX_VALUE)),y=P.max(y,r(a)))))}),s(A,function(t){var i,a=t[p],e=a.length;if(h&&t.getRadii(m,y,g.minSize,g.maxSize),x>0)for(;e--;)i=t.radii[e],o=Math.min((a[e]-u)*b-i,o),l=Math.max((a[e]-u)*b+i,l)}),A.length&&x>0&&c(this.options.min,this.userMin)===i&&c(this.options.max,this.userMax)===i&&(l-=a,b*=(a+o-l)/a,this.min+=o/b,this.max+=l/b))};var W=A.prototype,I=t.Pointer.prototype;W.toXY=function(t){var i,a=this.chart,e=t.plotX,o=t.plotY;t.rectPlotX=e,t.rectPlotY=o,t.clientX=(e/Math.PI*180+this.xAxis.pane.options.startAngle)%360,i=this.xAxis.postTranslate(t.plotX,this.yAxis.len-o),t.plotX=t.polarPlotX=i.x-a.plotLeft,t.plotY=t.polarPlotY=i.y-a.plotTop},W.orderTooltipPoints=function(t){this.chart.polar&&(t.sort(function(t,i){return t.clientX-i.clientX}),t[0]&&(t[0].wrappedClientX=t[0].clientX+360,t.push(t[0])))},y(g.area.prototype,"init",e),y(g.areaspline.prototype,"init",e),y(g.spline.prototype,"getPointSpline",function(t,i,a,e){var o,n,r,s,l,h,p,c,d,u,g,f,m,y,x,b,A,w,P=1.5,v=P+1;return this.chart.polar?(n=a.plotX,r=a.plotY,s=i[e-1],l=i[e+1],this.connectEnds&&(s||(s=i[i.length-2]),l||(l=i[1])),s&&l&&(h=s.plotX,p=s.plotY,c=l.plotX,d=l.plotY,u=(P*n+h)/v,g=(P*r+p)/v,f=(P*n+c)/v,m=(P*r+d)/v,y=Math.sqrt(Math.pow(u-n,2)+Math.pow(g-r,2)),x=Math.sqrt(Math.pow(f-n,2)+Math.pow(m-r,2)),b=Math.atan2(g-r,u-n),A=Math.atan2(m-r,f-n),w=Math.PI/2+(b+A)/2,Math.abs(b-w)>Math.PI/2&&(w-=Math.PI),u=n+Math.cos(w)*y,g=r+Math.sin(w)*y,f=n+Math.cos(Math.PI+w)*x,m=r+Math.sin(Math.PI+w)*x,a.rightContX=f,a.rightContY=m),e?(o=["C",s.rightContX||s.plotX,s.rightContY||s.plotY,u||n,g||r,n,r],s.rightContX=s.rightContY=null):o=["M",n,r]):o=t.call(this,i,a,e),o}),y(W,"translate",function(t){if(t.call(this),this.chart.polar&&!this.preventPostTranslate)for(var i=this.points,a=i.length;a--;)this.toXY(i[a])}),y(W,"getSegmentPath",function(t,i){var a=this.points;return this.chart.polar&&this.options.connectEnds!==!1&&i[i.length-1]===a[a.length-1]&&null!==a[0].y&&(this.connectEnds=!0,i=[].concat(i,[a[0]])),t.call(this,i)}),y(W,"animate",o),y(w,"animate",o),y(W,"setTooltipPoints",function(t,i){return this.chart.polar&&l(this.xAxis,{tooltipLen:360}),t.call(this,i)}),y(w,"translate",function(t){var i,a,e,o,n=this.xAxis,r=this.yAxis.len,s=n.center,l=n.startAngleRad,h=this.chart.renderer;if(this.preventPostTranslate=!0,t.call(this),n.isRadial)for(a=this.points,o=a.length;o--;)e=a[o],i=e.barX+l,e.shapeType="path",e.shapeArgs={d:h.symbols.arc(s[0],s[1],r-e.plotY,null,{start:i,end:i+e.pointWidth,innerR:r-c(e.yBottom,r)})},this.toXY(e)}),y(w,"alignDataLabel",function(t,i,a,e,o,n){if(this.chart.polar){var r,s,l=i.rectPlotX/Math.PI*180;null===e.align&&(r=l>20&&l<160?"left":l>200&&l<340?"right":"center",e.align=r),null===e.verticalAlign&&(s=l<45||l>315?"bottom":l>135&&l<225?"top":"middle",e.verticalAlign=s),W.alignDataLabel.call(this,i,a,e,o,n)}else t.call(this,i,a,e,o,n)}),y(I,"getIndex",function(t,i){var a,e,o,n,r=this.chart;return r.polar?(e=r.xAxis[0].center,o=i.chartX-e[0]-r.plotLeft,n=i.chartY-e[1]-r.plotTop,a=180-Math.round(Math.atan2(o,n)/Math.PI*180)):a=t.call(this,i),a}),y(I,"getCoordinates",function(t,i){var a=this.chart,e={xAxis:[],yAxis:[]};return a.polar?s(a.axes,function(t){var o=t.isXAxis,n=t.center,r=i.chartX-n[0]-a.plotLeft,s=i.chartY-n[1]-a.plotTop;e[o?"xAxis":"yAxis"].push({axis:t,value:t.translate(o?Math.PI-Math.atan2(r,s):Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),!0)})}):e=t.call(this,i),e})}(Highcharts);