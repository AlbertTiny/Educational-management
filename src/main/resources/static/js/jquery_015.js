/*
 *  扩展jqGrid对jQuery的方法支持:详情参见：jquery.jqgrid.additional.js
 */
;(function(c){function a(e){var d="";if((e.datatype&&e.datatype=="local")){if(c.i18n){d=c.i18n.prop("needCondition")}if(!d){d="\u8bf7\u9009\u62e9\u7b5b\u9009\u6761\u4ef6!"}}else{if(c.i18n){d=c.i18n.prop("emptyRecord")}if(!d){d="\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u8bb0\u5f55!"}}return d}function b(e){var k=this;var l=this.p;var g="#gview_"+c(e).attr("id");var i=c(e).jqGrid("getGridParam","records");var f=c(e).closest("div.ui-jqgrid-bdiv");if(i==0){f.find("div.auto-hdiv").remove();var h=c(e).jqGrid("getGridParam","colModel");if(c(e).find(".emptyrow").size()==0){var j=80;if(!c.founded(l.height)||"auto"==String(l.height).toLowerCase()){if(l.minHeight&&"auto"!=String(l.minHeight).toLowerCase()){j=parseInt(l.minHeight||80)}}c(e).find("tbody").append("<tr name='norecords' class='emptyrow' align='center' valign='middle' style='height:"+j+"px;'><td colspan='"+h.length+"' align='center' valign='middle' style='line-height:"+j+"px;text-align: center;font-size:12px;' >"+a(l)+"</td><tr>")}c(e).find("tr[name=norecords]").show();if((!c.founded(l.minHeight)&&!c.founded(l.height))||"auto"==String(l.height).toLowerCase()){c(e).setGridHeight("auto")}else{c(e).setGridHeight(Math.max(parseInt(l.minHeight||80),parseInt(l.height||80)))}}else{if(!c.founded(l.height)||"auto"==String(l.height).toLowerCase()){if(l.minHeight&&"auto"!=String(l.minHeight).toLowerCase()){var d=Math.max(c(k).outerHeight(),(c(k).actual("height")||0));var j=parseInt(l.minHeight)||80;f.find("div.auto-hdiv").remove();if(d<j){f.append('<div class="auto-hdiv" style="height:'+(j-d)+'px;">&nbsp;</div>')}}c(e).setGridHeight("auto")}else{var d=Math.max(c(k).outerHeight(),(c(k).actual("height")||0));var j=Math.max(parseInt(l.minHeight||80),parseInt(l.height||80));f.find("div.auto-hdiv").remove();if(d<j){f.append('<div class="auto-hdiv" style="height:'+(j-d)+'px;">&nbsp;</div>')}}if(l.autoheight){c(e).setGridHeight("auto")}c(e).find("tr[name=norecords]").hide()}if(l.resizeHandle){c(e).jqGrid().setGridWidth(c(l.resizeHandle).actual("innerWidth"))}if(l.resizeHandle&&c.resize){c(l.resizeHandle).unbind("resize").resize(function(){c(e).jqGrid("setGridWidth",c(l.resizeHandle).actual("innerWidth"))})}c.each(l.colModel||[],function(m,n){if(c.isFunction(n.formatter)){c(k).find("tr.jqgrow").each(function(){c(this).find("td[aria-describedby$='_"+n.name+"']").attr("title","")})}});setTimeout(function(){var m={"ui-icon-seek-first":"glyphicon glyphicon-step-backward","ui-icon-seek-prev":"glyphicon glyphicon-chevron-left","ui-icon-seek-next":"glyphicon glyphicon-chevron-right","ui-icon-seek-end":"glyphicon glyphicon-step-forward"};c(".ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon").each(function(){var o=c(this);var n=c.trim(o.attr("class").replace("ui-icon",""));if(n in m){o.attr("class","ui-icon "+m[n])}});if(c.fn.tooltip){c(k).find('[data-toggle*="tooltip"]').tooltip("destroy").tooltip({container:"body"});c(".navtable .ui-pg-button").tooltip("destroy").tooltip({container:"body"});c(k).find(".ui-pg-div").tooltip("destroy").tooltip({container:"body"})}},0);if(!l.edit&&!l.add&&!l.del&&!l.search&&!l.refresh&&!l.view){c(e+"_left").remove()}if(c.browser&&c.browser.msie===true&&c.browser.version<=9){c("table.ui-jqgrid-btable").find("td").attr("unselectable","on")}c(this).data("inited",true)}c.fn.extend({getJqGridOptions:function(f,g){f=f||{};var e=c(this).selector||f.selector;var d=c.extend(true,{},{loadComplete:f.loadComplete||c.noop,gridComplete:f.gridComplete||c.noop});if(c.i18n){f=c.i18n.grid(f)}var h={};if(f.datatype&&f.datatype!="local"){h=c.extend({},f||{},{pager:g,loadComplete:function(i){b.call(this,e);return d.loadComplete.call(this,i)}})}else{h=c.extend({},f,{pager:g,gridComplete:function(){b.call(this,e);return d.gridComplete.call(this)}})}return h},loadJqGrid:function(d){var e=c.extend(true,{},d||{},{selector:c(this).selector});return this.each(function(){var f=c(this).getJqGridOptions(e,e.pager);c(this).jqGrid(f).navGrid(f.pager||"#no_pager",{edit:false,editicon:"icon-pencil blue",add:false,addicon:"icon-plus-sign purple",del:false,delicon:"icon-trash red",search:false,searchicon:"icon-search orange",refresh:false,refreshicon:"icon-refresh green",view:false,viewicon:"icon-zoom-in grey"},{},{},{},{multipleSearch:false})})},reloadJqGrid:function(e){var d=c(this).selector;c(d).GridUnload();c(d).loadJqGrid(e)},reloadGrid:function(){c(this).jqGrid().trigger("reloadGrid")},refershGrid:function(d){if(d){c(this).jqGrid("setGridParam",{datatype:"json",postData:d||{},page:1}).trigger("reloadGrid")}else{c(this).jqGrid().trigger("reloadGrid")}},refershLocalGrid:function(d){c(this).clearGridData();c(this).jqGrid().clearGridData();c(this).jqGrid("setGridParam",{datatype:"local",data:d||[],rowNum:(d||[]).length,page:1}).trigger("reloadGrid",[{page:1}])},searchGrid:function(d){if(d){c(this).jqGrid("setGridParam",{datatype:"json",postData:d||{},page:1}).trigger("reloadGrid")}else{c(this).jqGrid().trigger("reloadGrid")}},getRowCount:function(){return c(this).getGridParam("reccount")},getKeys:function(){var d=c(this).jqGrid("getGridParam","multiselect");if(d){return c(this).jqGrid("getGridParam","selarrrow")}else{var e=c(this).jqGrid("getGridParam","selrow");if(c.founded(e)){return[e]}else{return[]}}},getRow:function(d){return c(this).jqGrid().getRowData(d)||c(this).jqGrid("getRowData",d)},setRow:function(d,e){return c(this).jqGrid().setRowData(d,e)},getRows:function(){return c(this).jqGrid("getRowData")},getSelectedRows:function(){var e=this;var d=[];c.each(c(e).getKeys(),function(f,g){var h=c(e).jqGrid("getRowData",g);d.push(h)});return d},setButton:function(d){c(this).navButtonAdd(d.pager,{id:d.id||"colChoice",caption:" ",buttonicon:d.buttonicon||"icon-gear",onClickButton:function(){d.onClickButton.call(this)},position:d.position||"first",title:d.title||"",cursor:"pointer"})}});c(document).off("keyup",'.ui-jqgrid-pager input[name="showCount"]').on("keyup",'.ui-jqgrid-pager input[name="showCount"]',function(f){if(c.trim(this.value).length>0){this.value=this.value.replace(/[^\d]/g,"")||"";var d=c.trim(c(this).next("span").text());if(/^[1-9]\d*$/.test(d)&&parseInt(this.value)>parseInt(d)){this.value=d}}else{this.value=1}})}(jQuery));