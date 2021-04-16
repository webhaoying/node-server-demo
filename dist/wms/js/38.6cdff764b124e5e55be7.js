webpackJsonp([38],{1061:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={goodsType:function(e){switch(String(e)){case"0":return"商品";case"1":return"小类";case"2":return"中类";case"3":return"大类"}},orderStatus:function(e){switch(String(e)){case"WAIT_CUT":return"待接单";case"WAIT_SEND":return"待发货";case"STOCKOUT":return"配送中";case"RECEIVED":return"已签收";case"CANCELLED":return"已取消";case"R_APPLY":return"差异待审";case"R_PERMIT":return"处理中";case"R_SUCCESS":return"处理完成";case"R_REJECT":return"差异拒绝";case"ALL":return"全部"}},orderSys:function(e){switch(String(e)){case"SAP":return"SAP";case"WMS":return"红草";case"MALL":return"中台"}},merchantType:function(e){switch(String(e)){case"HQBULK":return"红旗";case"MANUAL_BULK":return"手工";case"MAPP_BULK":return"小程序"}},dealStatus:function(e){switch(String(e)){case"1":return"已处理";default:return"待处理"}},productUnit:function(e){return["KG","G"].includes(String(e).toLocaleUpperCase())},rebateType:function(e){switch(String(e)){case"1":return"退款";default:return"收款"}},rebateStatus:function(e){switch(String(e)){case"1":return"已提交";case"2":return"作废";default:return"待提交"}},businessType:function(e){switch(String(e)){case"1001":return"大宗业务";case"1002":return"B2B2B";case"1003":return"小B业务";default:return""}}},e.exports=t.default},1259:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1260),a=o(n),l=r(1263),d=o(l),s=r(1266),i=o(s),u=r(1269),c=o(u);t.default={Form:a.default,Table:d.default,Tool:i.default,AddPopup:c.default},e.exports=t.default},1260:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,a,l=r(92),d=o(l),s=r(274),i=o(s),u=r(160),c=o(u),p=r(276),f=o(p),m=r(53),h=o(m),g=r(18),_=o(g),y=r(5),C=o(y),b=r(10),S=o(b),v=r(6),O=o(v),G=r(7),P=o(G),E=r(3),x=o(E);r(93),r(275),r(80),r(277),r(54);var T=r(0),w=o(T),N=r(280),R=r(95),L=r(1261),D=o(L),A=r(108),I=r(161),k=r(284),F=(n=(0,A.connect)(function(e){return(0,x.default)({},e.splitGroupModel)},function(e){return(0,I.bindActionCreators)({setBaseState:k.setBaseState,handleOrderGroupCodeFocus:k.handleOrderGroupCodeFocus,handleOrderGroupCodeSearch:k.handleOrderGroupCodeSearch,handleCommodityCodeSearch:k.handleCommodityCodeSearch,handleSearchResult:k.handleSearchResult},e)}))(a=function(e){function t(){(0,C.default)(this,t);var e=(0,O.default)(this,(t.__proto__||(0,_.default)(t)).call(this));return e.handleSearch=function(){var t=e.props,r=t.form.validateFieldsAndScroll,o=t.handleSearchResult,n=t.setBaseState;r(function(e,t){if(!e){var r={};t.inventoryDcCode&&t.inventoryDcCode.length>0&&(r.inventoryDcCode=t.inventoryDcCode),t.categoryCodes&&t.categoryCodes.length>0&&(r.categoryCodes=t.categoryCodes),t.groupCode&&t.groupCode.length>0&&(r.groupCode=t.groupCode),t.categoryType&&t.categoryType.length>0&&(r.categoryType=t.categoryType),n({searchParams:r}),o(r)}})},e.handleOrderGroupCodeSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(!t)return!1;try{e.props.handleOrderGroupCodeSearch(t)}catch(e){console.error(e)}},e.handleReset=function(){e.props.setBaseState({resetList_groupCode:{},resetList_categoryCode:{},searchParams:{}}),e.props.form.resetFields()},e.handleCommodityCodeSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(!t)return!1;try{var r=e.props.form.getFieldsValue(),o=r.categoryType,n=r.inventoryDcCode;if(!o)return h.default.error("请先选择类型");if("0"===o)e.props.handleCommodityCodeSearch({searchKey:t,inventoryLocation:n},o);else{var a={fuzzyWord:t,level:"1"==o?4:"2"==o?3:"3"==o?2:0};e.props.handleCommodityCodeSearch(a,o)}}catch(e){console.error(e)}},e.handleChange=function(t){return function(r){var o=e.props,n=o.form.setFieldsValue,a=o.setBaseState;"inventoryDcCode"==t?(a({resetList_groupCode:{},groupCodeListCOnfig:null}),n({groupCode:void 0})):"categoryType"==t&&(a({resetList_categoryCode:{},goodsListConfig:null}),n({categoryCode:void 0}))}},e}return(0,P.default)(t,e),(0,S.default)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,r=e.resetList_groupCode,o=e.resetList_categoryCode,n=e.dcListConfig,a=e.groupCodeListCOnfig,l=e.categoryTypeListConfig,s=e.goodsListConfig;return w.default.createElement(d.default,{className:D.default.form},w.default.createElement(i.default,{type:"flex",justify:"space-between"},w.default.createElement(f.default,{span:6},w.default.createElement(N.CommonSelect,(0,x.default)({getFieldDecorator:t,label:"库存地点",decorator:"inventoryDcCode",showSearch:!0,listConfig:n,placeholder:"请选择",listRenderGetValue:function(e){return e.dcCode},listRenderGetLabel:function(e){return e.dcCode+" "+e.dcName},listRenderGetShow:function(e){return""+e.dcName},onChange:this.handleChange("inventoryDcCode")},R.formItemLayout))),w.default.createElement(f.default,{span:6},w.default.createElement(N.CommonSelect,(0,x.default)({getFieldDecorator:t,label:"分组",decorator:"groupCode",showSearch:!0,listConfig:a,filterOption:!1,placeholder:"请选择",listRenderGetValue:function(e){return e.groupCode},listRenderGetLabel:function(e){return e.groupCode+" "+e.groupName},listRenderGetShow:function(e){return""+e.groupName},resetList:r,onFocus:this.props.handleOrderGroupCodeFocus,onSearch:this.handleOrderGroupCodeSearch},R.formItemLayout))),w.default.createElement(f.default,{span:6},w.default.createElement(N.CommonSelect,(0,x.default)({getFieldDecorator:t,decorator:"categoryType",listConfig:l,label:"类型",placeholder:"请选择",listRenderGetValue:function(e){return e.code},listRenderGetLabel:function(e){return""+e.value},onChange:this.handleChange("categoryType")},R.formItemLayout))),w.default.createElement(f.default,{span:6},w.default.createElement(N.CommonSelect,(0,x.default)({showSearch:!0,filterOption:!1,mode:"tags",getFieldDecorator:t,listConfig:s,decorator:"categoryCodes",label:"商品/分类",placeholder:"编码/名称",tokenSeparators:[","," ","\n"],listRenderGetValue:function(e){return e.productCode||e.categoryCode},listRenderGetLabel:function(e){return(e.productCode||e.categoryCode)+"/"+(e.productName||e.categoryName)},resetList:o,onFocus:this.handleCommodityCodeSearch,onSearch:this.handleCommodityCodeSearch},R.formItemLayout))),w.default.createElement(f.default,{span:12}),w.default.createElement(f.default,{span:6},w.default.createElement(i.default,{type:"flex",justify:"end",className:D.default.mb15},w.default.createElement(c.default,{type:"primary",className:D.default.mr10,onClick:this.handleSearch},"查询"),w.default.createElement(c.default,{onClick:this.handleReset},"重置")))))}}]),t}(T.PureComponent))||a;t.default=d.default.create()(F),e.exports=t.default},1261:function(e,t,r){var o=r(1262);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;r(846)(o,n);o.locals&&(e.exports=o.locals)},1262:function(e,t,r){t=e.exports=r(845)(!1),t.push([e.i,"/*\n * author: zero\n * createdTime: 2018/04/04\n * */\n.splitOrderGroups-style-Form__form--1tYY9 {\n  -webkit-box-shadow: 0px 3px 10px 0px rgba(33, 49, 123, 0.1);\n          box-shadow: 0px 3px 10px 0px rgba(33, 49, 123, 0.1); }\n\n.splitOrderGroups-style-Form__form--1tYY9 {\n  background-color: #fff;\n  width: 100%;\n  padding: 15px 10px 0 !important; }\n  .splitOrderGroups-style-Form__form--1tYY9 .splitOrderGroups-style-Form__form-item--3w_sK {\n    display: inline-block;\n    margin-right: 16px;\n    margin-bottom: 12px; }\n  .splitOrderGroups-style-Form__form--1tYY9 .splitOrderGroups-style-Form__mw200--c18Us {\n    min-width: 200px; }\n  .splitOrderGroups-style-Form__form--1tYY9 .splitOrderGroups-style-Form__wp22--3z8Xl {\n    width: 30%; }\n  .splitOrderGroups-style-Form__form--1tYY9 .splitOrderGroups-style-Form__mr10--2z4V8 {\n    margin-right: 10px; }\n  .splitOrderGroups-style-Form__form--1tYY9 .splitOrderGroups-style-Form__w100--2kCuz {\n    width: 100%; }\n  .splitOrderGroups-style-Form__form--1tYY9 .splitOrderGroups-style-Form__mb15--2GyTO {\n    margin-bottom: 15px; }\n",""]),t.locals={form:"splitOrderGroups-style-Form__form--1tYY9","form-item":"splitOrderGroups-style-Form__form-item--3w_sK",mw200:"splitOrderGroups-style-Form__mw200--c18Us",wp22:"splitOrderGroups-style-Form__wp22--3z8Xl",mr10:"splitOrderGroups-style-Form__mr10--2z4V8",w100:"splitOrderGroups-style-Form__w100--2kCuz",mb15:"splitOrderGroups-style-Form__mb15--2GyTO"}},1263:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,l=r(278),d=o(l),s=r(18),i=o(s),u=r(5),c=o(u),p=r(10),f=o(p),m=r(6),h=o(m),g=r(7),_=o(g),y=r(3),C=o(y);r(279);var b=r(0),S=o(b),v=r(35),O=o(v),G=r(1061),P=r(1264),E=o(P),x=r(108),T=r(161),w=r(284),N=(n=(0,x.connect)(function(e){return(0,C.default)({},e.splitGroupModel)},function(e){return(0,T.bindActionCreators)({handleSearchResult:w.handleSearchResult,handleSelectChange:w.handleSelectChange,updateSelectedRows:w.updateSelectedRows,pageSizeChange:w.pageSizeChange},e)}))(a=function(e){function t(){(0,c.default)(this,t);var e=(0,h.default)(this,(t.__proto__||(0,i.default)(t)).call(this));return e.columns=[{title:"",dataIndex:"",key:"",width:10},{title:"库存地点",dataIndex:"inventoryDcCode",key:"inventoryDcCode",width:150,render:function(e,t,r){return e+" "+t.inventoryDcName}},{title:"分组名称",dataIndex:"groupCode",key:"groupCode",width:120,render:function(e,t,r){return e+" "+t.groupName}},{title:"类型",dataIndex:"categoryType",key:"categoryType",width:50,render:function(e,t,r){return(0,G.goodsType)(String(e))}},{title:"商品/分类",dataIndex:"categoryCode",key:"categoryCode",width:100,render:function(e,t,r){return e+" "+t.categoryName}},{title:"最后更新者",dataIndex:"updatedBy",key:"updatedBy",width:50},{title:"最新更新时间",dataIndex:"updatedTime",key:"updatedTime",width:80,render:function(e){return S.default.createElement("span",null,(0,O.default)(e).format("YYYY-MM-DD HH:mm:ss"))}}],e}return(0,_.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.pageSizeChange,r=e.total,o=e.page,n=e.size,a=e.tableLoading,l=e.handleSelectChange,s=e.updateSelectedRows,i=e.selectedRowKeys,u=e.searchResult,c={selectedRowKeys:i,onChange:l,onSelect:s},p={total:r,showTotal:function(e,t){return"共 "+e+" 条"},showQuickJumper:!0,current:o,pageSize:n,showSizeChanger:!0,onShowSizeChange:t,className:""+E.default.pagination,onChange:t,pageSizeOptions:["50","100","200","500"]};return S.default.createElement("div",{className:E.default["table-group"]},S.default.createElement(d.default,{className:E.default.table,rowKey:function(e){return e.id},loading:a,rowSelection:c,pagination:p,dataSource:u,columns:this.columns,size:"middle"}))}}]),t}(b.PureComponent))||a;t.default=N,e.exports=t.default},1264:function(e,t,r){var o=r(1265);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;r(846)(o,n);o.locals&&(e.exports=o.locals)},1265:function(e,t,r){t=e.exports=r(845)(!1),t.push([e.i,"/*\n * author: zero\n * createdTime: 2018/04/04\n * */\n.splitOrderGroups-style-Table__table-group--3aW3Q {\n  -webkit-box-shadow: 0px 3px 10px 0px rgba(33, 49, 123, 0.1);\n          box-shadow: 0px 3px 10px 0px rgba(33, 49, 123, 0.1); }\n\n.splitOrderGroups-style-Table__table-group--3aW3Q {\n  background-color: #fff;\n  margin: 0 0 30px 0; }\n  .splitOrderGroups-style-Table__table-group--3aW3Q .splitOrderGroups-style-Table__pagination--KQuTF {\n    float: none;\n    text-align: center; }\n  .splitOrderGroups-style-Table__table-group--3aW3Q .splitOrderGroups-style-Table__price--2vHZn {\n    width: 55px;\n    padding: 4px;\n    display: inline-block; }\n    .splitOrderGroups-style-Table__table-group--3aW3Q .splitOrderGroups-style-Table__price--2vHZn + div {\n      position: absolute;\n      width: 300px;\n      left: 0;\n      bottom: -24px;\n      z-index: 1; }\n  .splitOrderGroups-style-Table__table-group--3aW3Q .splitOrderGroups-style-Table__price-group--_dfNb {\n    margin-bottom: 0 !important; }\n  .splitOrderGroups-style-Table__table-group--3aW3Q .splitOrderGroups-style-Table__table--1SBID > div > div > div:first-child {\n    overflow: inherit; }\n  .splitOrderGroups-style-Table__table-group--3aW3Q .splitOrderGroups-style-Table__table--1SBID table {\n    overflow: inherit; }\n",""]),t.locals={"table-group":"splitOrderGroups-style-Table__table-group--3aW3Q",pagination:"splitOrderGroups-style-Table__pagination--KQuTF",price:"splitOrderGroups-style-Table__price--2vHZn","price-group":"splitOrderGroups-style-Table__price-group--_dfNb",table:"splitOrderGroups-style-Table__table--1SBID"}},1266:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,l=r(160),d=o(l),s=r(53),i=o(s),u=r(18),c=o(u),p=r(5),f=o(p),m=r(10),h=o(m),g=r(6),_=o(g),y=r(7),C=o(y),b=r(3),S=o(b);r(80),r(54);var v=r(0),O=o(v),G=r(79),P=r(28),E=r(81),x=r(163),T=r(1267),w=o(T),N=r(108),R=r(161),L=r(284),D=(n=(0,N.connect)(function(e){return(0,S.default)({},e.splitGroupModel)},function(e){return(0,R.bindActionCreators)({setBaseState:L.setBaseState,handleOrderGroupCodeFocus:L.handleOrderGroupCodeFocus,handleOrderGroupCodeSearch:L.handleOrderGroupCodeSearch,handleCommodityCodeSearch:L.handleCommodityCodeSearch,handleSearchResult:L.handleSearchResult,exportDatas:L.exportDatas,showAddPopup:L.showAddPopup},e)}))(a=function(e){function t(){(0,f.default)(this,t);var e=(0,_.default)(this,(t.__proto__||(0,c.default)(t)).call(this));return e.handleDetaile=function(){var t=e.props,r=t.selectedRows,o=t.setBaseState;if(!r.length)return i.default.error("至少选中一项");o({visible:!0,type:"0"})},e.handleDeleteOk=function(){var t=e.props,r=t.selectedRows,o=t.handleSearchResult,n=t.setBaseState;if(!r.length)return i.default.error("至少选中一项");var a=r.map(function(e){return e.id}).join();(0,P.getData)({api:G.API_DELETE_CONFIGURE_SPLIT_ORDER_GROUPS_DELETE,searchParams:{ids:a}}).then(function(t){e.handleCancel(),t&&"success"==t.message&&!t.result?(i.default.success("删除成功"),o(),n({selectedRowKeys:[],selectedRows:[]})):""!=t.result&&i.default.error(t.result)})},e.handleCancel=function(){return e.props.setBaseState({visible:!1})},e.switchType=function(){return O.default.createElement(x.Popup,{visible:e.props.visible,okType:"danger",onOk:e.handleDeleteOk,onCancel:e.handleCancel,content:O.default.createElement("p",{style:{textIndent:"40px"}},"是否确认删除?")})},e.handleDownLoad=function(){return(0,P.getData)({api:G.API_GET_CONFIGURE_SPLIT_ORDER_GROUPS_DOWNLOAD})},e.handleImportSuccess=function(t){t&&"success"===t.message&&i.default.success("导入成功"),e.props.handleSearchResult()},e.importChange=function(t){var r=t.file.status,o=e.props.setBaseState;o("uploading"===r?{uploading:!0}:{uploading:!1})},e.handleExprotError=function(){(0,P.getData)({api:G.API_GET_CONFIGURE_SPLIT_ORDER_GROUPS_EXPORT_ERROR,searchParams:{loginToken:(0,E.getVariantSession)(E.LOGIN_TOKEN)}})},e.columns=[{title:"商品编码",dataIndex:"productCode",key:"productCode",width:150},{title:"发货方编码",dataIndex:"supplierCode",key:"supplierCode",width:150},{title:"子客户号",dataIndex:"sapSubCode",key:"sapSubCode",width:150},{title:"报错原因",dataIndex:"message",key:"message",width:150}],e}return(0,C.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.exportDatas,r=e.eloading,o=e.uploading,n=e.visible,a=e.showAddPopup;return O.default.createElement("div",{className:w.default["table-tool"]},O.default.createElement(d.default,{className:w.default.btn,type:"primary",onClick:function(){return a(!0)}},"新增"),O.default.createElement(d.default,{className:w.default.btn,type:"primary",onClick:this.handleDetaile},"删除"),O.default.createElement(d.default,{className:w.default.btn,type:"primary",onClick:this.handleDownLoad},"下载模版"),O.default.createElement(x.Import,{action:{api:G.API_POST_CONFIGURE_SPLIT_ORDER_GROUPS_IMPORT},onOk:this.handleImportSuccess,onExprotError:this.handleExprotError,onChange:this.importChange},O.default.createElement(d.default,{loading:o,className:w.default.btn,type:"primary"},"导入数据")),O.default.createElement(d.default,{onClick:t,loading:r,className:w.default.btn,type:"primary"},"导出数据"),n&&this.switchType())}}]),t}(v.PureComponent))||a;t.default=D,e.exports=t.default},1267:function(e,t,r){var o=r(1268);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;r(846)(o,n);o.locals&&(e.exports=o.locals)},1268:function(e,t,r){t=e.exports=r(845)(!1),t.push([e.i,"/*\n * author: zero\n * createdTime: 2018/04/04\n * */\n.splitOrderGroups-style-Tool__table-tool--1xRkG {\n  background-color: #fff;\n  padding: 15px;\n  border-bottom: 1px solid #e8e8e8;\n  margin-top: 15px; }\n  .splitOrderGroups-style-Tool__table-tool--1xRkG .splitOrderGroups-style-Tool__btn--yq5_g {\n    margin-right: 15px; }\n",""]),t.locals={"table-tool":"splitOrderGroups-style-Tool__table-tool--1xRkG",btn:"splitOrderGroups-style-Tool__btn--yq5_g"}},1269:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,a,l=r(92),d=o(l),s=r(90),i=o(s),u=r(160),c=o(u),p=r(53),f=o(p),m=r(18),h=o(m),g=r(5),_=o(g),y=r(10),C=o(y),b=r(6),S=o(b),v=r(7),O=o(v),G=r(3),P=o(G);r(93),r(91),r(80),r(54);var E=r(0),x=o(E),T=r(1270),w=o(T),N=r(108),R=r(161),L=r(284),D=(n=(0,N.connect)(function(e){return(0,P.default)({},e.splitGroupModel)},function(e){return(0,R.bindActionCreators)({setBaseState:L.setBaseState,showAddPopup:L.showAddPopup,submitAddSplitGroupData:L.submitAddSplitGroupData},e)}))(a=function(e){function t(e){(0,_.default)(this,t);var r=(0,S.default)(this,(t.__proto__||(0,h.default)(t)).call(this,e));return r.handleSaveName=function(e,t){r.saveName[e]=t},r.handleSubmit=function(){var e=r.props,t=e.form.validateFieldsAndScroll,o=e.submitAddSplitGroupData;t(function(e,t){if(!e)try{var n=(0,P.default)({businessType:1001,categoryType:t.categoryType||"",inventoryDcCode:t.inventoryDcCode&&t.inventoryDcCode.split("/")[0]||"",groupCode:t.groupCode&&t.groupCode.split("/")[0]||"",categoryCode:t.categoryCode&&t.categoryCode.split("/")[0]||""},r.saveName);if(""==n.businessType||""==n.categoryType||""==n.inventoryDcCode||""==n.groupCode||""==n.categoryCode)return f.default.error("请输入必填内容");for(var a in n)""==n[a]&&delete n[a];o(n)}catch(e){console.error(e)}})},r.saveName={},r}return(0,O.default)(t,e),(0,C.default)(t,[{key:"render",value:function(){var e=this.props,t=e.showAddPopup,r=e.isShowAddPopUp,o=e.loading;return x.default.createElement(i.default,{style:{top:"10px"},visible:r,onOk:this.handleSubmit,onCancel:function(){return t(!1)},title:"新增",footer:[x.default.createElement(c.default,{key:"back",onClick:function(){return t(!1)}},"取消"),x.default.createElement(c.default,{key:"submit",type:"primary",loading:o,onClick:this.handleSubmit},"确定")]},x.default.createElement(w.default,(0,P.default)({handleSaveName:this.handleSaveName,saveName:this.saveName},this.state,this.props)))}}]),t}(E.Component))||a;t.default=d.default.create()(D),e.exports=t.default},1270:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(3),a=o(n),l=r(53),d=o(l),s=r(18),i=o(s),u=r(5),c=o(u),p=r(10),f=o(p),m=r(6),h=o(m),g=r(7),_=o(g);r(54);var y=r(0),C=o(y),b=r(280),S=r(79),v=r(95),O=r(1271),G=o(O),P=function(e){function t(e){(0,c.default)(this,t);var r=(0,h.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return r.handleGroupCodeFocus=function(){r.setState({groupCodeListCOnfig:{api:S.API_GET_PICKING_SORTING_WORKERS_ORDER_GROUP,searchParams:{groupName:"",size:20}}})},r.handleOrderGroupCodeSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e)return!1;try{r.setState({groupCodeListCOnfig:{api:S.API_GET_PICKING_SORTING_WORKERS_ORDER_GROUP,searchParams:{groupName:e,size:20}}})}catch(e){console.error(e)}},r.handleCommodityCodeSearch=function(e){if(!e)return!1;try{var t=r.props.form.getFieldsValue(),o=t.categoryType,n=t.inventoryDcCode&&t.inventoryDcCode.split("/")[0];if(!o)return d.default.error("请先选择类型");switch(o){case"0":if(!n)return d.default.error("请先选择库存地点");r.setState({goodsListConfig:{api:S.API_GET_GOODS_INFO_ADD_GOODS,searchParams:{searchKey:e,locationCode:n}}});break;case"1":case"2":case"3":var a={fuzzyWord:e,level:"1"==o?4:"2"==o?3:"3"==o?2:0};r.setState({goodsListConfig:{api:S.API_GET_CLIENT_AGREEENT_GOODS_TYPE_CODE,searchParams:a}})}}catch(e){console.error(e)}},r.handleChange=function(e,t){var o=r.props,n=o.form.setFieldsValue,a=o.saveName,l=a[e];if(!t||""==t||"string"!=typeof t||l==t)return!1;switch(e){case"inventoryDcCode":r.setState({goodsListConfig:null,resetList_goods:{}},function(){n({groupCode:void 0,categoryType:void 0,categoryCode:void 0}),r.handleSelect(e,t)});break;case"groupCode":r.setState({goodsListConfig:null,resetList_goods:{}},function(){n({categoryType:void 0,categoryCode:void 0}),r.handleSelect(e,t)});break;case"categoryType":r.setState({goodsListConfig:null,resetList_goods:{}},function(){n({categoryCode:void 0})});break;case"categoryCode":r.handleSelect(e,t)}},r.handleSelect=function(e,t){var o=r.props,n=o.handleSaveName,a=o.saveName,l=a[e];if(!t||""==t||"string"!=typeof t||l==t)return!1;var d="";try{d=t.split("/").pop()}catch(e){console.error(e)}"inventoryDcCode"===e?n("inventoryDcName",d):"groupCode"===e?n("groupName",d):"categoryCode"===e&&n("categoryName",d)},r.state={resetList_goods:{},goodsListConfig:null,groupCodeListCOnfig:null,categoryTypeListConfig:{api:S.API_GET_CLIENT_AGREEENT_GOODS_CATEGORY_TYPE},categoryTypeValue:"0",sapSubCodeList:[],dcListConfig:{api:S.API_GET_PROMOTION_DETAILS_INVENTORY_DCS}},r}return(0,_.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,r=t.goodsListConfig,o=t.groupCodeListCOnfig,n=t.dcListConfig,l=t.resetList_sap,d=t.resetList_goods,s=t.categoryTypeListConfig;return C.default.createElement("div",{className:G.default.goodsNewPrieSettings_addCommodityPrices},C.default.createElement(b.CommonSelect,(0,a.default)({getFieldDecorator:e,label:"库存地点",decorator:"inventoryDcCode",showSearch:!0,listConfig:n,placeholder:"请选择",listRenderGetValue:function(e){return e.dcCode+"/"+e.dcName},listRenderGetLabel:function(e){return e.dcCode+"/"+e.dcName},listRenderGetShow:function(e){return""+e.dcName},rules:[{required:!0,message:"库存地点不可为空"}],onChange:this.handleChange.bind(this,"inventoryDcCode")},v.popupFormItemLayout)),C.default.createElement(b.CommonSelect,(0,a.default)({getFieldDecorator:e,label:"分组",decorator:"groupCode",showSearch:!0,filterOption:!1,listConfig:o,onFocus:this.handleGroupCodeFocus,placeholder:"请选择",listRenderGetValue:function(e){return e.groupCode+"/"+e.groupName},listRenderGetLabel:function(e){return e.groupCode+"/"+e.groupName},listRenderGetShow:function(e){return""+e.groupName},resetList:l,rules:[{required:!0,message:"分组不可为空"}],onChange:this.handleChange.bind(this,"groupCode"),onSearch:this.handleOrderGroupCodeSearch},v.popupFormItemLayout)),C.default.createElement(b.CommonSelect,(0,a.default)({getFieldDecorator:e,decorator:"categoryType",listConfig:s,label:"类型",placeholder:"请选择",onChange:this.handleChange.bind(this,"categoryType"),rules:[{required:!0,message:"类型不可为空"}],listRenderGetValue:function(e){return e.code},listRenderGetLabel:function(e){return""+e.value}},v.popupFormItemLayout)),C.default.createElement(b.CommonSelect,(0,a.default)({showSearch:!0,filterOption:!1,getFieldDecorator:e,listConfig:r,onFocus:this.handleCommodityCodeSearch.bind(this,"*"),onSearch:this.handleCommodityCodeSearch,onChange:this.handleChange.bind(this,"categoryCode"),resetList:d,decorator:"categoryCode",label:"商品/分类",placeholder:"编码/名称",rules:[{required:!0,message:"商品分类编码/名称不可为空"}],listRenderGetValue:function(e){return(e.productCode||e.categoryCode)+"/"+(e.productName||e.categoryName)},listRenderGetLabel:function(e){return(e.productCode||e.categoryCode)+"/"+(e.productName||e.categoryName)}},v.popupFormItemLayout)))}}]),t}(y.PureComponent);t.default=P,e.exports=t.default},1271:function(e,t,r){var o=r(1272);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;r(846)(o,n);o.locals&&(e.exports=o.locals)},1272:function(e,t,r){t=e.exports=r(845)(!1),t.push([e.i,"/*\n * author: zero\n * createdTime: 2018/04/04\n * */\n.splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E {\n  padding: 10px 0;\n  background-color: #ffffff; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E .splitOrderGroups-style-AddPopup__formItemHalf--1XKqa {\n    display: inline-block;\n    width: 50%; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E .splitOrderGroups-style-AddPopup__fontPoint--2fVoR {\n    color: #d9534f; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E .splitOrderGroups-style-AddPopup__formItemLable--qd-N1 {\n    margin-right: 10px; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E .splitOrderGroups-style-AddPopup__formSubmit--1a04_ {\n    margin-right: 10px; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E .splitOrderGroups-style-AddPopup__inputNumber--E0gB2 {\n    width: 100%;\n    height: 31px; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E > div {\n    margin-bottom: 24px; }\n  .splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E .splitOrderGroups-style-AddPopup__price--P-vG7 {\n    height: 35px; }\n",""]),t.locals={goodsNewPrieSettings_addCommodityPrices:"splitOrderGroups-style-AddPopup__goodsNewPrieSettings_addCommodityPrices--1QP8E",formItemHalf:"splitOrderGroups-style-AddPopup__formItemHalf--1XKqa",fontPoint:"splitOrderGroups-style-AddPopup__fontPoint--2fVoR",formItemLable:"splitOrderGroups-style-AddPopup__formItemLable--qd-N1",formSubmit:"splitOrderGroups-style-AddPopup__formSubmit--1a04_",inputNumber:"splitOrderGroups-style-AddPopup__inputNumber--E0gB2",price:"splitOrderGroups-style-AddPopup__price--P-vG7"}},873:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,l=r(18),d=o(l),s=r(5),i=o(s),u=r(10),c=o(u),p=r(6),f=o(p),m=r(7),h=o(m),g=r(3),_=o(g),y=r(0),C=o(y),b=r(933),S=r(1259),v=r(108),O=r(161),G=r(284),P=(n=(0,v.connect)(function(e){return(0,_.default)({},e.splitGroupModel)},function(e){return(0,O.bindActionCreators)({handleSearchResult:G.handleSearchResult},e)}))(a=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,d.default)(t)).call(this))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"componentWillMount",value:function(){this.props.handleSearchResult()}},{key:"render",value:function(){return C.default.createElement("section",null,C.default.createElement(b.Bread,{route:["配置模块","拆单分组"]}),C.default.createElement(S.Form,null),C.default.createElement(S.Tool,null),C.default.createElement(S.Table,null),C.default.createElement(S.AddPopup,null))}}]),t}(y.PureComponent))||a;t.default=P,e.exports=t.default},933:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(934),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={Bread:n.default},e.exports=t.default},934:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(935),a=o(n),l=r(18),d=o(l),s=r(5),i=o(s),u=r(10),c=o(u),p=r(6),f=o(p),m=r(7),h=o(m);r(936);var g=r(0),_=o(g),y=r(939),C=o(y),b=function(e){function t(e){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.route;return _.default.createElement("div",{className:C.default.overHidden},_.default.createElement("div",{className:C.default.iconStyle}),_.default.createElement(a.default,{className:C.default.breadcrumb},e&&e.map(function(e,t){return _.default.createElement(a.default.Item,{key:t},e)})))}}]),t}(g.Component);t.default=b,e.exports=t.default},935:function(e,t,r){e.exports=r(1)(649)},936:function(e,t,r){"use strict";r(25),r(937)},937:function(e,t,r){var o=r(938);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;r(846)(o,n);o.locals&&(e.exports=o.locals)},938:function(e,t,r){t=e.exports=r(845)(!1),t.push([e.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-breadcrumb {\n  font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-breadcrumb .anticon {\n  font-size: 12px;\n}\n.ant-breadcrumb a {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n.ant-breadcrumb a:hover {\n  color: #40a9ff;\n}\n.ant-breadcrumb > span:last-child {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb-link > .anticon + span {\n  margin-left: 4px;\n}\n',""])},939:function(e,t,r){var o=r(940);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;r(846)(o,n);o.locals&&(e.exports=o.locals)},940:function(e,t,r){t=e.exports=r(845)(!1),t.push([e.i,"._-_-components-Bread-index__overHidden--EoDY8 {\n  overflow: hidden;\n  margin: 15px 0; }\n\n._-_-components-Bread-index__iconStyle--q7m1H {\n  float: left;\n  background-color: #1890ff;\n  margin-top: 2px;\n  width: 3px;\n  height: 18px; }\n\n._-_-components-Bread-index__breadcrumb--3NPJi {\n  float: left;\n  padding-left: 15px;\n  font-size: 12px;\n  color: #A1A6AD; }\n  ._-_-components-Bread-index__breadcrumb--3NPJi > span:last-child {\n    font-size: 14px;\n    color: #000; }\n",""]),t.locals={overHidden:"_-_-components-Bread-index__overHidden--EoDY8",iconStyle:"_-_-components-Bread-index__iconStyle--q7m1H",breadcrumb:"_-_-components-Bread-index__breadcrumb--3NPJi"}}});
//# sourceMappingURL=38.6cdff764b124e5e55be7.js.map