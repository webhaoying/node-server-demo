webpackJsonp([45],{1009:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=void 0;var o=a(3),n=function(e){return e&&e.__esModule?e:{default:e}}(o),r=a(161),l=a(1056),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(l);t.mapDispatchToProps=function(e){return(0,r.bindActionCreators)((0,n.default)({},i),e)}},1056:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleCommit=t.handleLocation=t.handleMuchDelete=t.handleOperator=t.handleGetDetailPrint=t.handleExport=t.handleGetList=t.update=void 0;var o=a(3),n=function(e){return e&&e.__esModule?e:{default:e}}(o),r=a(295),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(r),i=a(28),u=a(79);t.update=function(e){return{type:l.PRODUCTSTORAGERELATION_UPDATE,data:e}},t.handleGetList=function(e){return function(t){t({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{tableLoading:!0}});var a=e.searchParams;for(var o in a)"[object Object]"===Object.prototype.toString.call(a[o])&&(a[o]="productName"===o?a[o].children:a[o].value);a.warehouseCode||(a.warehouseCode=e.userLoation&&e.userLoation.value),(0,i.getData)((0,n.default)({api:u.API_PRODUCTSTORAGERELATIONS_PAGE},e)).then(function(a){var o=e.searchParams,n=o.page,r=o.size;t({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{page:n,size:r,tableLoading:!1,total:a.result.total,selectedRowKeys:[],selectedRows:[],searchResult:a.result.list||[]}})}).catch(function(e){t({type:l.PRODUCTSTORAGERELATION_FILE})})}},t.handleExport=function(e,t){return function(a){var o=e.searchParams;for(var r in o)"[object Object]"===Object.prototype.toString.call(o[r])&&(o[r]=o[r].value);(0,i.getData)((0,n.default)({api:u.API_PRODUCTSTORAGERELATIONS_EXPORT},e)).then(function(e){t&&t()}).catch(function(e){a({type:l.PRODUCTSTORAGERELATION_FILE})})}},t.handleGetDetailPrint=function(e){return function(t){t({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{printLoading:!0}}),(0,i.getData)((0,n.default)({api:u.API_PRODUCTSTORAGERELATIONS_PRINT},e)).then(function(e){t({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{printLoading:!1,printData:e.result||[]}})}).catch(function(e){t({type:l.PRODUCTSTORAGERELATION_FILE})})}},t.handleOperator=function(e,t){return function(a){(0,i.getData)((0,n.default)({api:u.API_PRODUCTSTORAGERELATIONS_DELETE},e)).then(function(e){t&&t()}).catch(function(e){a({type:l.PRODUCTSTORAGERELATION_FILE})})}},t.handleMuchDelete=function(e,t){return function(a){console.log(e,333),(0,i.getData)((0,n.default)({api:u.API_PRODUCTSTORAGERELATIONS_BATCHDEL},e)).then(function(e){t&&t()}).catch(function(e){a({type:l.PRODUCTSTORAGERELATION_FILE})})}},t.handleLocation=function(e,t){return function(a){a({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{createTableLoading:!0}});var o=u.API_PRODUCTSTORAGERELATIONS_LOADSTORAGELIST;(0,i.getData)((0,n.default)({api:o},e)).then(function(e){a({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{createTableLoading:!1}}),t&&t(e.result)}).catch(function(e){a({type:l.PRODUCTSTORAGERELATION_FILE})})}},t.handleCommit=function(e,t){return function(a){a({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{tableLoading:!0,modalTuttonLoading:!0}});var o=u.API_PRODUCTSTORAGERELATIONS_CREATE;(0,i.getData)((0,n.default)({api:o},e)).then(function(e){a({type:l.PRODUCTSTORAGERELATION_UPDATE,data:{tableLoading:!1,modalTuttonLoading:!1}}),t&&t()}).catch(function(e){a({type:l.PRODUCTSTORAGERELATION_FILE})})}}},1167:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,r,l=a(92),i=o(l),u=a(274),d=o(u),s=a(160),c=o(s),p=a(94),f=o(p),m=a(276),h=o(m),g=a(18),_=o(g),y=a(5),E=o(y),S=a(10),C=o(S),R=a(6),v=o(R),b=a(7),T=o(b),L=a(3),P=o(L);a(93),a(275),a(80),a(59),a(277);var O=a(0),A=o(O),N=a(1168),D=o(N),I=a(108),x=a(1009),w=a(280),k=a(79),F=(n=(0,I.connect)(function(e){return(0,P.default)({},e.productStorageRelation,{userLoation:e.userLoation})},x.mapDispatchToProps))(r=function(e){function t(){(0,E.default)(this,t);var e=(0,v.default)(this,(t.__proto__||(0,_.default)(t)).apply(this,arguments));return e.query=function(){var t=e.props,a=t.handleGetList,o=t.searchParams,n=t.size,r=t.userLoation,l=(0,P.default)({},o);a({searchParams:(0,P.default)({},l,{page:1,size:n}),userLoation:r})},e.handleAdd=function(){(0,e.props.update)({isShowModal:!0,modalTitle:"新增商品储位关系",modalData:""})},e.reset=function(){(0,e.props.update)({searchParams:{}})},e}return(0,T.default)(t,e),(0,C.default)(t,[{key:"onInputChange",value:function(e){var t=this.props,a=t.searchParams;(0,t.update)({searchParams:(0,P.default)({},a,e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.searchParams,o=a.storageLocationCodeOrName,n=a.reservoirAreaCode,r=a.shipperCode,l=a.productCode,u=a.productName,s=a.pickingSortNumberStart,p=a.pickingSortNumberEnd,m=a.warehouseCode,g=t.userLoation;return A.default.createElement(i.default,{className:D.default.form},A.default.createElement(d.default,{type:"flex",justify:"start"},A.default.createElement(h.default,{span:6},A.default.createElement(w.CsxSelect,{label:"仓库",style:{width:"100%"},antd:{disabled:!0},selectItem:{data:m||{value:g.value,children:g.children},key:"warehouseCode",valueKey:["warehouseCode","warehouseName"]},onChangeSelect:function(t){e.onInputChange({warehouseCode:t})}})),A.default.createElement(h.default,{span:6},A.default.createElement(w.CsxSelect,{dateApi:k.API_STORAGELOCATIONS_RESERVOIRAREAS,label:"库区",selectItem:{data:n,key:"key",valueKey:["key","value"]},onChangeSelect:function(t){e.onInputChange({reservoirAreaCode:t})}})),A.default.createElement(h.default,{span:6},A.default.createElement(w.CsxSelect,{dateApi:k.API_STOCKRELOCATION_SHIPPERKEYVALUES,label:"货主",selectItem:{data:r,key:"key",valueKey:["key","value"]},onChangeSelect:function(t){e.onInputChange({shipperCode:t})}})),A.default.createElement(h.default,{span:6},A.default.createElement("div",{className:"commonInput"},A.default.createElement("label",{style:{width:100}},"储位编码/名称:"),A.default.createElement("div",{className:"box"},A.default.createElement(f.default,{style:{},value:o,onChange:function(t){e.onInputChange({storageLocationCodeOrName:t.target.value})}})))),A.default.createElement(h.default,{span:6},A.default.createElement(w.CsxMultipleSearch,{dateApi:k.API_PRODUCT_GETPRODUCTKEYVALUES,label:"商品编码",searchParamsKey:"productCode",searchParams:{warehouseCode:g.value},selectItem:{data:l,key:"key",valueKey:["key","value"]},onChangeSelect:function(t){e.onInputChange({productCode:t})}})),A.default.createElement(h.default,{span:6},A.default.createElement(w.CsxSearch,{dateApi:k.API_PRODUCT_GETPRODUCTKEYVALUES,label:"商品名称",searchParamsKey:"productName",searchParams:{warehouseCode:g.value},selectItem:{data:u,key:"key",valueKey:["key","value"]},onChangeSelect:function(t,a){e.onInputChange({productName:t})},onSelect:function(t){e.onInputChange({productName:t})}})),A.default.createElement(h.default,{span:8},A.default.createElement("div",{className:"commonInput"},A.default.createElement("label",null,"拣货顺序："),A.default.createElement(f.default,{style:{marginRight:5,width:100},value:s,placeholder:"最小顺序",onChange:function(t){e.onInputChange({pickingSortNumberStart:t.target.value})}}),A.default.createElement("span",null,"-"),A.default.createElement(f.default,{style:{marginLeft:5,width:100},value:p,placeholder:"最大顺序",onChange:function(t){e.onInputChange({pickingSortNumberEnd:t.target.value})}}))),A.default.createElement(h.default,{span:24},A.default.createElement(d.default,{type:"flex",justify:"end"},A.default.createElement(c.default,{type:"primary",className:D.default.mr10,onClick:this.query},"查询"),A.default.createElement(c.default,{type:"primary",className:D.default.mr10,onClick:this.reset},"重置"),A.default.createElement(c.default,{type:"primary",className:D.default.mr10,onClick:this.handleAdd},"新增")))))}}]),t}(O.PureComponent))||r;t.default=i.default.create()(F),e.exports=t.default},1168:function(e,t,a){var o=a(1169);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;a(846)(o,n);o.locals&&(e.exports=o.locals)},1169:function(e,t,a){t=e.exports=a(845)(!1),t.push([e.i,"/*\n * author: zero\n * createdTime: 2018/04/04\n * */\n.productStorageRelation-components-style-Form__form--1gNDs {\n  -webkit-box-shadow: 0px 3px 10px 0px rgba(33, 49, 123, 0.1);\n          box-shadow: 0px 3px 10px 0px rgba(33, 49, 123, 0.1); }\n\n.productStorageRelation-components-style-Form__form--1gNDs {\n  background-color: #fff;\n  width: 100%;\n  padding: 15px !important;\n  line-height: 32px; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__form-item--1sYni {\n    display: inline-block;\n    margin-right: 16px;\n    margin-bottom: 12px; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__hignSearch--jCQZU {\n    cursor: pointer;\n    margin-left: 10px;\n    font-size: 14px;\n    color: #1890ff;\n    line-height: 32px;\n    margin-right: 15px; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__transition--2tyyD {\n    -webkit-transition: height 0.3s, padding 0.3s, -webkit-transform 0.3s;\n    transition: height 0.3s, padding 0.3s, -webkit-transform 0.3s;\n    transition: height 0.3s, padding 0.3s, transform 0.3s;\n    transition: height 0.3s, padding 0.3s, transform 0.3s, -webkit-transform 0.3s; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__aniSlideUp--1KFCu {\n    height: 0;\n    overflow: hidden;\n    padding-top: 0;\n    padding-bottom: 0;\n    border: none; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__aniRotate--2ZE5M {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__targetHeight--3_SbC {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px dashed #D2D3D4;\n    min-height: 47px; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__mw200--9y6Vz {\n    min-width: 200px; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__wp22--RrrNR {\n    width: 30%; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__mr10--2IpQO {\n    margin-right: 10px; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__w100--2PpFo {\n    width: 100%; }\n  .productStorageRelation-components-style-Form__form--1gNDs .productStorageRelation-components-style-Form__mb15--2S-Aq {\n    margin-bottom: 15px; }\n",""]),t.locals={form:"productStorageRelation-components-style-Form__form--1gNDs","form-item":"productStorageRelation-components-style-Form__form-item--1sYni",hignSearch:"productStorageRelation-components-style-Form__hignSearch--jCQZU",transition:"productStorageRelation-components-style-Form__transition--2tyyD",aniSlideUp:"productStorageRelation-components-style-Form__aniSlideUp--1KFCu",aniRotate:"productStorageRelation-components-style-Form__aniRotate--2ZE5M",targetHeight:"productStorageRelation-components-style-Form__targetHeight--3_SbC",mw200:"productStorageRelation-components-style-Form__mw200--9y6Vz",wp22:"productStorageRelation-components-style-Form__wp22--RrrNR",mr10:"productStorageRelation-components-style-Form__mr10--2IpQO",w100:"productStorageRelation-components-style-Form__w100--2PpFo",mb15:"productStorageRelation-components-style-Form__mb15--2S-Aq"}},1170:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,l=a(278),i=o(l),u=a(53),d=o(u),s=a(18),c=o(s),p=a(5),f=o(p),m=a(10),h=o(m),g=a(6),_=o(g),y=a(7),E=o(y),S=a(3),C=o(S),R=a(90),v=o(R);a(279),a(54),a(91);var b=a(0),T=o(b),L=a(108),P=a(1009),O=v.default.confirm,A=(n=(0,L.connect)(function(e){return(0,C.default)({},e.productStorageRelation,{userLoation:e.userLoation})},P.mapDispatchToProps))(r=function(e){function t(){(0,f.default)(this,t);var e=(0,_.default)(this,(t.__proto__||(0,c.default)(t)).call(this));return e.onChange=function(t,a,o,n){var r=e.props,l=r.handleGetList,i=r.searchParams,u=(r.page,r.size,r.userLoation);l(o.order?"ascend"===o.order?{searchParams:(0,C.default)({page:t.current,size:t.pageSize},i,{isAsc:!0,columns:o.field}),userLoation:u}:{searchParams:(0,C.default)({page:t.current,size:t.pageSize},i,{isAsc:!1,columns:o.field}),userLoation:u}:{searchParams:(0,C.default)({page:t.current,size:t.pageSize},i),userLoation:u})},e.state={},e.columns=[{title:"货主",width:150,dataIndex:"shipperCode",key:"shipperCode",render:function(e,t,a){return""+t.shipperCode}},{title:"商品编码",width:150,dataIndex:"productCode",key:"productCode"},{title:"商品名称",width:150,dataIndex:"productName",key:"productName"},{title:"储位编码",width:150,dataIndex:"storageLocationCode",key:"storageLocationCode"},{title:"储位名称",width:150,dataIndex:"storageLocationName",key:"storageLocationName"},{title:"库区属性",width:150,dataIndex:"reservoirAreaAttribute",key:"reservoirAreaAttribute"},{title:"是否拣选面",width:100,dataIndex:"storageLocationTypeJX",key:"storageLocationTypeJX"},{title:"更新人",width:100,dataIndex:"updateBy",key:"updateBy"},{title:"更新时间",width:150,dataIndex:"updateTime",key:"updateTime"}],e}return(0,E.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.handleGetList,a=e.searchParams,o=e.page,n=e.size,r=e.userLoation;r&&r.value&&t({searchParams:(0,C.default)({page:o,size:n},a),userLoation:r})}},{key:"componentWillReceiveProps",value:function(e,t){var a=this.props,o=a.handleGetList,n=a.userLoation;e.userLoation.value!=n.value&&o({searchParams:(0,C.default)({page:1,size:e.size},e.searchParams),userLoation:e.userLoation})}},{key:"handleOperator",value:function(e,t,a,o){var n=this.props,r=n.handleGetList,l=n.searchParams,i=n.page,u=n.size,s=n.handleOperator,c=n.userLoation;O({title:"温馨提示",content:"是否删除？",okText:"确认",width:520,cancelText:"取消",onOk:function(){s({urlParams:[t.id]},function(){d.default.success("操作成功"),r({searchParams:(0,C.default)({page:i,size:u},l),userLoation:c})})}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.total,o=t.page,n=t.size,r=t.tableLoading,l=t.searchResult,u=t.selectedRowKeys,d={total:a,showTotal:function(e,t){return"共 "+e+" 条"},showQuickJumper:!0,current:o,pageSize:n,showSizeChanger:!0,className:"pagination",pageSizeOptions:["50","100","200","500"]},s={selectedRowKeys:u,onChange:function(t,a){(0,e.props.update)({selectedRowKeys:t,selectedRows:a})}};return T.default.createElement("div",{className:"table-group"},T.default.createElement(i.default,{rowKey:function(e){return e.id},loading:r,columns:this.columns,dataSource:l,scroll:{x:"max-content",y:400},onChange:this.onChange,pagination:d,rowSelection:s}))}}]),t}(b.PureComponent))||r;t.default=A,e.exports=t.default},1171:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,l=a(160),i=o(l),u=a(53),d=o(u),s=a(18),c=o(s),p=a(5),f=o(p),m=a(10),h=o(m),g=a(6),_=o(g),y=a(7),E=o(y),S=a(3),C=o(S),R=a(90),v=o(R);a(80),a(54),a(91);var b=a(0),T=o(b),L=a(79),P=a(163),O=a(1172),A=o(O),N=a(108),D=a(1009),I=a(81),x=v.default.confirm,w=(n=(0,N.connect)(function(e){return(0,C.default)({},e.productStorageRelation,{userLoation:e.userLoation})},D.mapDispatchToProps))(r=function(e){function t(){(0,f.default)(this,t);var e=(0,_.default)(this,(t.__proto__||(0,c.default)(t)).call(this));return e.handleDownLoad=function(e){var t=JSON.parse(localStorage.getItem("b2bWmsDownload"));window.open(t[e].downloadUrl)},e.handleImportSuccess=function(t){var a=e.props,o=a.handleGetList,n=a.searchParams,r=a.page,l=a.size;t&&"ok"===t.message&&d.default.success("导入成功"),o({searchParams:(0,C.default)({page:r,size:l},n)})},e.handleExprotError=function(){},e.handleBrowse=function(t){var a=e.props.selectedRowKeys;if(!a.length)return void d.default.error("请选择需要打印的储位");(0,I.setVariant)("wms/productStorageRelation",a),window.open("/wms/productStorageRelation/Print","newWindow","height=500, width=1300, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")},e.handleExport=function(){var t=e.props,a=t.handleExport,o=t.searchParams,n=t.page,r=t.size,l=t.userLoation;a({searchParams:(0,C.default)({page:n,size:r,warehouseCode:l.value},o,{productName:o.productName?o.productName.children:""})},function(){d.default.success("导出成功")})},e.handleDelete=function(){var t=e.props,a=t.selectedRowKeys,o=t.handleMuchDelete,n=t.handleGetList,r=t.searchParams,l=t.userLoation,i=t.page,u=t.size;if(0==a.length)return void d.default.error("请先选择需要批量删除的商品储位关系");console.log(a.length);var s=a.join(",");console.log(s),x({title:"温馨提示",content:"确认将这"+a.length+"条商品储位关系删除？",okText:"确认",width:520,cancelText:"取消",onOk:function(){o({data:{productStorageIds:s}},function(){d.default.success("批量删除成功"),n({searchParams:(0,C.default)({},r,{page:i,size:u}),userLoation:l})})}})},e.state={},e}return(0,E.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this;return T.default.createElement("div",{className:A.default["table-tool"]},T.default.createElement(i.default,{type:"primary",className:A.default.btn,onClick:function(){e.handleDownLoad("T01")}},"模板下载"),T.default.createElement(P.Import,{action:{api:L.API_PRODUCTSTORAGERELATIONS_IMPORT},onOk:this.handleImportSuccess,onExprotError:this.handleExprotError,beforeImport:function(){(0,e.props.update)({tableLoading:!0})},onResponse:function(){(0,e.props.update)({tableLoading:!1})}},T.default.createElement(i.default,{type:"primary",className:A.default.btn},"批量导入")),T.default.createElement(i.default,{type:"primary",className:A.default.btn,onClick:this.handleExport},"导出"),T.default.createElement(i.default,{type:"primary",className:A.default.btn,onClick:this.handleBrowse},"打印储位条码"),T.default.createElement(i.default,{type:"primary",className:A.default.btn,onClick:this.handleDelete},"批量删除"))}}]),t}(b.PureComponent))||r;t.default=w,e.exports=t.default},1172:function(e,t,a){var o=a(1173);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;a(846)(o,n);o.locals&&(e.exports=o.locals)},1173:function(e,t,a){t=e.exports=a(845)(!1),t.push([e.i,"/*\n * author: zero\n * createdTime: 2018/04/04\n * */\n.productStorageRelation-components-style-Tool__table-tool--34Plc {\n  background-color: #fff;\n  padding: 15px;\n  border-bottom: 1px solid #e8e8e8;\n  margin-top: 15px; }\n  .productStorageRelation-components-style-Tool__table-tool--34Plc .productStorageRelation-components-style-Tool__btn--18UIE {\n    margin-right: 15px; }\n",""]),t.locals={"table-tool":"productStorageRelation-components-style-Tool__table-tool--34Plc",btn:"productStorageRelation-components-style-Tool__btn--18UIE"}},1174:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,r,l=a(90),i=o(l),u=a(274),d=o(u),s=a(276),c=o(s),p=a(160),f=o(p),m=a(94),h=o(m),g=a(53),_=o(g),y=a(18),E=o(y),S=a(5),C=o(S),R=a(10),v=o(R),b=a(6),T=o(b),L=a(7),P=o(L),O=a(3),A=o(O),N=a(92),D=o(N);a(91),a(275),a(277),a(80),a(59),a(54),a(93);var I=a(0),x=o(I),w=a(95),k=a(280),F=a(79),U=a(108),G=a(1009),z=D.default.Item,M=(n=(0,U.connect)(function(e){return(0,A.default)({},e.productStorageRelation,{userLoation:e.userLoation})},G.mapDispatchToProps))(r=function(e){function t(){(0,C.default)(this,t);var e=(0,T.default)(this,(t.__proto__||(0,E.default)(t)).call(this));return e.handleSelectChange=function(t){var a=e.props,o=(a.form,a.update),n=a.modalData;o({modalData:(0,A.default)({},n,t)})},e.handleSubmit=function(t){var a=e.props,o=a.form,n=a.modalData,r=a.handleCommit;t.preventDefault(),o.validateFieldsAndScroll(function(t,a){if(!t){var o=(0,A.default)({},a,n);delete o.storageLocationTypeName;for(var l in o)console.log(l),"[object Object]"===Object.prototype.toString.call(o[l])&&("shipperCode"==l&&(o.shipperName=o[l].children),"productCode"==l&&(o.productName=o[l].children.replace(o[l].value,"")),"storageLocationCode"==l&&(o.storageLocationName=o[l].children.replace(o[l].value,"")),o[l]=o[l].value);var i={data:o},u="创建成功";n&&n.id&&(i.data.id=n.id,i.urlParams=[n.id],u="编辑成功"),r((0,A.default)({},i),function(){_.default.success(u);var t=e.props,a=t.handleGetList,o=t.searchParams,n=t.page,r=t.size;a({searchParams:(0,A.default)({page:n,size:r},o)}),e.handleCloseModal()})}})},e.handleCloseModal=function(){(0,e.props.update)({isShowModal:!1})},e}return(0,P.default)(t,e),(0,v.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.modalData,a=e.update;if(t){var o=(0,A.default)({},t);o.shipperType={value:o.shipperType&&o.shipperType.toString(),children:o.shipperTypeDesc&&o.shipperTypeDesc.toString()};var n=[],r=[];o.provinceCode&&(n.push({value:o.provinceCode,label:o.provinceName}),r.push(o.provinceCode)),o.cityCode&&(n.push({value:o.cityCode,label:o.cityName}),r.push(o.cityCode)),o.regionCode&&(n.push({value:o.regionCode,label:o.regionName}),r.push(o.regionCode)),o.threeCode={value:n,children:r},a({modalData:(0,A.default)({},o)})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.modalTitle,o=t.form.getFieldDecorator,n=t.modalTuttonLoading,r=t.modalData;t.update;return x.default.createElement(i.default,{title:a,visible:!0,onCancel:this.handleCloseModal,mask:!1,className:"operationModal",footer:null},x.default.createElement(D.default,{onSubmit:this.handleSubmit,autoComplete:"off"},x.default.createElement(z,(0,A.default)({},w.popupFormItemLayout,{label:"货主",hasFeedback:!0}),o("shipperCode",{initialValue:r.shipperCode,rules:[{required:!0,message:"请填写!"}]})(x.default.createElement(k.CsxFormSelect,{dateApi:F.API_STOCKRELOCATION_SHIPPERKEYVALUES,selectItem:{key:"key",valueKey:["key","value"]},handleSelectChange:function(t){e.handleSelectChange({shipperCode:t})}}))),x.default.createElement(z,(0,A.default)({},w.popupFormItemLayout,{label:"商品",hasFeedback:!0}),o("productCode",{initialValue:r.productCode,rules:[{required:!0,message:"请填写!"}]})(x.default.createElement(k.CsxFormSearch,{dateApi:F.API_NEWPRODUCTSTOCK_GETPRODUCTKEYVALUES,searchParamsKey:"productCode",selectItem:{data:r.productCode,key:"key",valueKey:["key","value"]},onChangeSelect:function(t){e.handleSelectChange({productCode:t})},onSelect:function(t){e.handleSelectChange({productCode:t})}}))),x.default.createElement(z,(0,A.default)({},w.popupFormItemLayout,{label:"绑定储位",hasFeedback:!0}),o("storageLocationCode",{initialValue:r.storageLocationCode,rules:[{required:!0,message:"请填写!"}]})(x.default.createElement(k.CsxFormSearch,{dateApi:F.API_PRODUCTSTORAGERELATIONS_LOADSTORAGELIST,searchParamsKey:"storageLocation",selectItem:{data:r.storageLocationCode,key:"storageLocationCode",valueKey:["storageLocationCode","storageLocationName"]},onChangeSelect:function(t){e.handleSelectChange({storageLocationCode:t})},onSelect:function(t){var a=e.props.handleLocation;e.handleSelectChange({storageLocationCode:t}),a({searchParams:{storageLocation:t.value}},function(t){e.handleSelectChange({storageLocationTypeCode:t[0].storageLocationTypeCode,storageLocationTypeName:t[0].storageLocationTypeName})})}}))),x.default.createElement(z,(0,A.default)({},w.popupFormItemLayout,{label:"储位类型"}),o("storageLocationTypeName",{initialValue:r.storageLocationTypeName})(x.default.createElement("p",null,r.storageLocationTypeName))),x.default.createElement(z,(0,A.default)({},w.popupFormItemLayout,{label:"拣货顺序",hasFeedback:!0}),o("pickingSortNumber",{initialValue:r.pickingSortNumber,rules:[{required:!0,message:"请填写大于0且最多两位小数的数字!",pattern:/^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/}]})(x.default.createElement(h.default,null))),x.default.createElement(d.default,{type:"flex",justify:"center"},x.default.createElement(c.default,null,x.default.createElement(f.default,{style:{marginRight:"48px"},onClick:this.handleCloseModal},"取消"),x.default.createElement(f.default,{type:"primary",htmlType:"submit",loading:n},"保存")))))}}]),t}(I.PureComponent))||r;t.default=D.default.create()(M),e.exports=t.default},862:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,l=a(18),i=o(l),u=a(5),d=o(u),s=a(10),c=o(s),p=a(6),f=o(p),m=a(7),h=o(m),g=a(3),_=o(g),y=a(933),E=a(0),S=o(E),C=a(1167),R=o(C),v=a(1170),b=o(v),T=a(1171),L=o(T),P=a(108),O=a(1174),A=o(O),N=a(1009),D=a(326),I=o(D),x=(n=(0,P.connect)(function(e){return(0,_.default)({},e.productStorageRelation)},N.mapDispatchToProps))(r=function(e){function t(){return(0,d.default)(this,t),(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"componentWillUnmount",value:function(){(0,this.props.update)(I.default)}},{key:"render",value:function(){return S.default.createElement("section",null,S.default.createElement(y.Bread,{route:["基础数据","商品储位关系"]}),S.default.createElement(R.default,null),S.default.createElement(L.default,null),S.default.createElement(b.default,null),this.props.isShowModal?S.default.createElement(A.default,null):null)}}]),t}(E.PureComponent))||r;t.default=x,e.exports=t.default},933:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(934),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={Bread:n.default},e.exports=t.default},934:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(935),r=o(n),l=a(18),i=o(l),u=a(5),d=o(u),s=a(10),c=o(s),p=a(6),f=o(p),m=a(7),h=o(m);a(936);var g=a(0),_=o(g),y=a(939),E=o(y),S=function(e){function t(e){return(0,d.default)(this,t),(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.route;return _.default.createElement("div",{className:E.default.overHidden},_.default.createElement("div",{className:E.default.iconStyle}),_.default.createElement(r.default,{className:E.default.breadcrumb},e&&e.map(function(e,t){return _.default.createElement(r.default.Item,{key:t},e)})))}}]),t}(g.Component);t.default=S,e.exports=t.default},935:function(e,t,a){e.exports=a(1)(649)},936:function(e,t,a){"use strict";a(25),a(937)},937:function(e,t,a){var o=a(938);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;a(846)(o,n);o.locals&&(e.exports=o.locals)},938:function(e,t,a){t=e.exports=a(845)(!1),t.push([e.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-breadcrumb {\n  font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-breadcrumb .anticon {\n  font-size: 12px;\n}\n.ant-breadcrumb a {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n.ant-breadcrumb a:hover {\n  color: #40a9ff;\n}\n.ant-breadcrumb > span:last-child {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb-link > .anticon + span {\n  margin-left: 4px;\n}\n',""])},939:function(e,t,a){var o=a(940);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;a(846)(o,n);o.locals&&(e.exports=o.locals)},940:function(e,t,a){t=e.exports=a(845)(!1),t.push([e.i,"._-_-components-Bread-index__overHidden--EoDY8 {\n  overflow: hidden;\n  margin: 15px 0; }\n\n._-_-components-Bread-index__iconStyle--q7m1H {\n  float: left;\n  background-color: #1890ff;\n  margin-top: 2px;\n  width: 3px;\n  height: 18px; }\n\n._-_-components-Bread-index__breadcrumb--3NPJi {\n  float: left;\n  padding-left: 15px;\n  font-size: 12px;\n  color: #A1A6AD; }\n  ._-_-components-Bread-index__breadcrumb--3NPJi > span:last-child {\n    font-size: 14px;\n    color: #000; }\n",""]),t.locals={overHidden:"_-_-components-Bread-index__overHidden--EoDY8",iconStyle:"_-_-components-Bread-index__iconStyle--q7m1H",breadcrumb:"_-_-components-Bread-index__breadcrumb--3NPJi"}}});
//# sourceMappingURL=45.1eb2d0cd1315ea9eed75.js.map