webpackJsonp([24],{IO1F:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("P//+");document.addEventListener("DOMContentLoaded",function t(){return document.removeEventListener("DOMContentLoaded",t,!1),new i.a},!1)},"P//+":function(t,e,a){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=a("+3IL"),n=a.n(r),s=a("P6M/"),o=a.n(s),c=a("ZYhW"),l=a("nYQN"),h=(a.n(l),function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}()),p=".prometheus-container",u=".prometheus-graph",m=n.a.time.format("%H:%M"),g=n.a.time.format("%b %e, %a"),d=n.a.bisector(function(t){return t.time}).left,f=100,x=function(){function e(){i(this,e);var a=t(p),r=a.data("has-metrics");if(this.docLink=a.data("doc-link"),this.integrationLink=a.data("prometheus-integration"),t(document).ajaxError(function(){}),r){this.margin={top:80,right:180,bottom:80,left:100},this.marginLabelContainer={top:40,right:0,bottom:40,left:0};var n=t(u).parent().width()+f;this.originalWidth=n,this.originalHeight=330,this.width=n-this.margin.left-this.margin.right,this.height=this.originalHeight-this.margin.top-this.margin.bottom,this.backOffRequestCounter=0,this.configureGraph(),this.init()}else this.state=".js-getting-started",this.updateState()}return h(e,[{key:"createGraph",value:function(){var t=this;Object.keys(this.graphSpecificProperties).forEach(function(e){t.graphSpecificProperties[e].data.length>0&&t.plotValues(e)})}},{key:"init",value:function(){var t=this;this.getData().then(function(e){var a=!0;Object.keys(e.metrics).forEach(function(t){var i=void 0;"cpu_values"!==t&&"memory_values"!==t||(i=e.metrics[t],0===Object.keys(i).length&&(a=!1))}),a?(t.transformData(e),t.createGraph()):(t.state=".js-loading",t.updateState())})}},{key:"plotValues",value:function(t){var e=this.graphSpecificProperties[t],a=n.a.time.scale().range([0,this.width]),i=n.a.scale.linear().range([this.height,0]);e.xScale=a,e.yScale=i;var r=u+"[graph-type="+t+"]",s=n.a.select(r).attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.bottom+this.margin.top).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),o=n.a.select(r).attr("width",this.originalWidth).attr("height",this.originalHeight).append("g").attr("transform","translate("+this.marginLabelContainer.left+","+this.marginLabelContainer.top+")");a.domain(n.a.extent(e.data,function(t){return t.time})),i.domain([0,n.a.max(e.data.map(function(t){return t.value}))]);var c=n.a.svg.axis().scale(a).ticks(this.commonGraphProperties.axis_no_ticks).orient("bottom"),l=n.a.svg.axis().scale(i).ticks(this.commonGraphProperties.axis_no_ticks).tickSize(-this.width).orient("left");this.createAxisLabelContainers(o,t),s.append("g").attr("class","x-axis").attr("transform","translate(0,"+this.height+")").call(c),s.append("g").attr("class","y-axis").call(l);var h=n.a.svg.area().x(function(t){return a(t.time)}).y0(this.height).y1(function(t){return i(t.value)}).interpolate("linear"),p=n.a.svg.line().x(function(t){return a(t.time)}).y(function(t){return i(t.value)});s.append("path").datum(e.data).attr("d",h).attr("class","metric-area").attr("fill",e.area_fill_color),s.append("path").datum(e.data).attr("class","metric-line").attr("stroke",e.line_color).attr("fill","none").attr("stroke-width",this.commonGraphProperties.area_stroke_width).attr("d",p),s.append("rect").attr("class","prometheus-graph-overlay").attr("width",this.width).attr("height",this.height).on("mousemove",this.handleMouseOverGraph.bind(this,r))}},{key:"createAxisLabelContainers",value:function(t,e){var a=this.graphSpecificProperties[e];t.append("line").attr("class","label-x-axis-line").attr("stroke","#000000").attr("stroke-width","1").attr({x1:10,y1:this.originalHeight-this.margin.top,x2:this.originalWidth-this.margin.right+10,y2:this.originalHeight-this.margin.top}),t.append("line").attr("class","label-y-axis-line").attr("stroke","#000000").attr("stroke-width","1").attr({x1:10,y1:0,x2:10,y2:this.originalHeight-this.margin.top}),t.append("rect").attr("class","rect-axis-text").attr("x",0).attr("y",50).attr("width",30).attr("height",150),t.append("text").attr("class","label-axis-text").attr("text-anchor","middle").attr("transform","translate(15, "+(this.originalHeight-this.margin.top)/2+") rotate(-90)").text(a.graph_legend_title),t.append("rect").attr("class","rect-axis-text").attr("x",this.originalWidth/2-this.margin.right).attr("y",this.originalHeight-100).attr("width",30).attr("height",80),t.append("text").attr("class","label-axis-text").attr("x",this.originalWidth/2-this.margin.right).attr("y",this.originalHeight-this.margin.top).attr("dy",".35em").text("Time"),t.append("rect").attr("x",this.originalWidth-170).attr("y",this.originalHeight/2-60).style("fill",a.area_fill_color).attr("width",20).attr("height",35),t.append("text").attr("class","text-metric-title").attr("x",this.originalWidth-140).attr("y",this.originalHeight/2-50).text("Average"),t.append("text").attr("class","text-metric-usage").attr("x",this.originalWidth-140).attr("y",this.originalHeight/2-25)}},{key:"handleMouseOverGraph",value:function(t){var e=this,i=document.querySelector(t+" .prometheus-graph-overlay"),r=n.a.mouse(i)[0];Object.keys(this.graphSpecificProperties).forEach(function(t){var i=e.graphSpecificProperties[t],s=i.xScale.invert(r),o=d(i.data,s,1),l=i.data[o-1],h=i.data[o],p=s-l.time>h.time-s,f=p?h:l,x=i.xScale(f.time),v=u+"[graph-type="+t+"]",y=n.a.max(i.data.map(function(t){return t.value})),_=i.yScale(y);n.a.selectAll(v+" .selected-metric-line").remove(),n.a.selectAll(v+" .circle-metric").remove(),n.a.selectAll(v+" .rect-text-metric").remove(),n.a.selectAll(v+" .text-metric").remove();var k=n.a.select(v).select("g");k.append("line").attr("class","selected-metric-line").attr({x1:x,y1:i.yScale(0),x2:x,y2:_}),k.append("circle").attr("class","circle-metric").attr("fill",i.line_color).attr("cx",x).attr("cy",i.yScale(f.value)).attr("r",e.commonGraphProperties.circle_radius_metric);var b=k.append("g").attr("class","rect-text-metric").attr("translate","("+x+", "+i.yScale(f.value)+")");b.append("rect").attr("class","rect-metric").attr("x",x+10).attr("y",_).attr("width",e.commonGraphProperties.rect_text_width).attr("height",e.commonGraphProperties.rect_text_height),b.append("text").attr("class","text-metric").attr("x",x+35).attr("y",_+35).text(m(f.time)),b.append("text").attr("class","text-metric-date").attr("x",x+15).attr("y",_+15).text(g(f.time));var w=a.i(c.a)(f.value);w+="cpu_values"===t?"%":" MB",n.a.select(v+" .text-metric-usage").text(w)})}},{key:"configureGraph",value:function(){this.graphSpecificProperties={cpu_values:{area_fill_color:"#edf3fc",line_color:"#5b99f7",graph_legend_title:"CPU Usage (Cores)",data:[],xScale:{},yScale:{}},memory_values:{area_fill_color:"#fca326",line_color:"#fc6d26",graph_legend_title:"Memory Usage (MB)",data:[],xScale:{},yScale:{}}},this.commonGraphProperties={area_stroke_width:2,median_total_characters:8,circle_radius_metric:5,rect_text_width:90,rect_text_height:40,axis_no_ticks:3}}},{key:"getData",value:function(){var e=this;return gl.utils.backOff(function(a,i){t.ajax({url:"metrics.json",dataType:"json"}).done(function(t,r,n){n.status===o.a.NO_CONTENT?(e.backOffRequestCounter=e.backOffRequestCounter+=1,e.backOffRequestCounter<3?a():i({status:n.status,metrics:t})):i({status:n.status,metrics:t})}).fail(i)}).then(function(t){return t.status===o.a.NO_CONTENT?{}:t.metrics}).catch(function(){e.state=".js-unable-to-connect",e.updateState()})}},{key:"transformData",value:function(t){var e=this;Object.keys(t.metrics).forEach(function(a){if("cpu_values"===a||"memory_values"===a){var i=t.metrics[a][0];void 0!==i&&(e.graphSpecificProperties[a].data=i.values.map(function(t){return{time:new Date(1e3*t[0]),value:t[1]}}))}})}},{key:"updateState",value:function(){var e=t(".prometheus-state");t(".prometheus-graphs").hide(),t(""+this.state,e).removeClass("hidden"),t(".prometheus-state").show()}}]),e}();e.a=x}).call(e,a("lwLq"))},"P6M/":function(t,e){var a={NO_CONTENT:204,OK:200};t.exports=a}},["IO1F"]);
//# sourceMappingURL=monitoring.72f2975277289447b7a2.bundle.js.map