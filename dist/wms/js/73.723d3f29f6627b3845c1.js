webpackJsonp([73],{1007:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mapDispatchToProps=void 0;var n=a(3),o=function(t){return t&&t.__esModule?t:{default:t}}(n),l=a(161),r=a(1071),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(r);e.mapDispatchToProps=function(t){return(0,l.bindActionCreators)((0,o.default)({},d),t)}},1071:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.handleFrmFix=e.handleExport=e.GetButtonPower=e.handleCommit=e.handleGetDetailRecord=e.handleCancel=e.handleCarriedOut=e.handleChuweiInfo=e.handleGetList=e.update=void 0;var o=a(3),l=n(o),r=a(300),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(r),u=a(28),i=a(79),c=a(35),E=n(c);e.update=function(t){return{type:d.REPORTLOSSMANAGEMENT_UPDATE,data:t}},e.handleGetList=function(t){return function(e){e({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{tableLoading:!0}});var a=t.searchParams;for(var n in a)"[object Object]"===Object.prototype.toString.call(a[n])&&(a[n]=a[n].value);a.initDate&&a.initDate.length&&(a.beginDate=(0,E.default)(a.initDate[0]).format("YYYY-MM-DD"),a.endDate=(0,E.default)(a.initDate[1]).format("YYYY-MM-DD")),delete a.initDate,(0,u.getData)((0,l.default)({api:i.API_FRMLOSSORDERS_PAGE},t)).then(function(a){var n=t.searchParams,o=n.page,l=n.size;e({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{page:o,size:l,tableLoading:!1,total:a.result.total,selectedRowKeys:[],selectedRows:[],searchResult:a.result.list||[]}})}).catch(function(t){e({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleChuweiInfo=function(t,e){return function(a){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{createTableLoading:!0}});var n=i.API_FRMLOSSDTLORDERS_GETSTORAGELOCATIONFUZZYKEYVALUES;(0,u.getData)((0,l.default)({api:n},t)).then(function(t){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{createTableLoading:!1}}),e&&e(t.result)}).catch(function(t){a({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleCarriedOut=function(t,e){return function(a){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{modalTuttonLoading:!0,tableLoading:!0}});var n=i.API_FRMLOSSORDERS_EXECUTE;(0,u.getData)((0,l.default)({api:n},t)).then(function(t){console.log(t.code),a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{isShowModal:!1,codeNum:t.code}}),e&&e(t.code)}).catch(function(t){a({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleCancel=function(t,e){return function(a){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{modalTuttonLoading:!0}});var n=i.API_FRMLOSSORDERS_CLOSE;(0,u.getData)((0,l.default)({api:n},t)).then(function(t){console.log(t),a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{modalTuttonLoading:!1,isShowModal:!1}}),e&&e(t.result)}).catch(function(t){a({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleGetDetailRecord=function(t){return function(e){e({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{tableLoading:!0}}),(0,u.getData)((0,l.default)({api:i.API_FRMLOSSDTLORDERS_OBTAIN},t)).then(function(t){console.log(t.result.header),e({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{tableLoading:!1,searchResultRecord:t.result||[]}})}).catch(function(t){e({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleCommit=function(t,e){return function(a){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{tableLoading:!0}});var n=i.API_CREATEFRMLOSSORDERS_CREATE;(0,u.getData)((0,l.default)({api:n},t)).then(function(t){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{tableLoading:!1}}),e&&e()}).catch(function(t){a({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.GetButtonPower=function(t){return function(e){(0,u.getData)((0,l.default)({api:i.API_GET_MENUS_PERMISSIONS_BANS},t)).then(function(t){var a=t.data;console.log(a);var n={};a.map(function(t){n[t.menuCode]=!0}),e({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:(0,l.default)({},n)})}).catch(function(t){e({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleExport=function(t,e){return function(a){var n=t.searchParams;for(var o in n)"[object Object]"===Object.prototype.toString.call(n[o])&&(n[o]=n[o].value);n.initDate&&n.initDate.length&&(n.beginDate=(0,E.default)(n.initDate[0]).format("YYYY-MM-DD"),n.endDate=(0,E.default)(n.initDate[1]).format("YYYY-MM-DD")),delete n.initDate,(0,u.getData)((0,l.default)({api:i.API_FRMLOSSORDERS_EXPORT},t)).then(function(t){e&&e()}).catch(function(t){a({type:d.REPORTLOSSMANAGEMENT_FILE})})}},e.handleFrmFix=function(t,e){return function(a){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{buttonLoading:!0}}),(0,u.getData)((0,l.default)({api:i.API_FIX_FRMLOSSORDERS_WRITEOFF},t)).then(function(t){a({type:d.REPORTLOSSMANAGEMENT_UPDATE,data:{buttonLoading:!1}}),e&&e()}).catch(function(t){a({type:d.REPORTLOSSMANAGEMENT_FILE})})}}},907:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,l,r=a(278),d=n(r),u=a(274),i=n(u),c=a(276),E=n(c),f=a(18),s=n(f),p=a(5),R=n(p),A=a(10),O=n(A),T=a(6),S=n(T),h=a(7),M=n(h),m=a(3),L=n(m);a(279),a(275),a(277);var P=a(0),_=n(P),D=a(108),N=a(1007),y=(o=(0,D.connect)(function(t){return(0,L.default)({},t.reportLossManagement,{userLoation:t.userLoation})},N.mapDispatchToProps))(l=function(t){function e(){(0,R.default)(this,e);var t=(0,S.default)(this,(e.__proto__||(0,s.default)(e)).call(this));return t.handleCloseModal=function(){var e=t.props.history;e.length>1?e.goBack():window.close()},t.state={},t.columns=[{title:"商品编号",width:100,dataIndex:"productCode",key:"productCode"},{title:"商品名称",width:100,dataIndex:"productName",key:"productName"},{title:"商品条码",width:100,dataIndex:"productBarCode",key:"productBarCode"},{title:"储位",width:100,dataIndex:"storeLocationName",key:"storeLocationName"},{title:"报损数量",width:100,dataIndex:"frmlossQty",key:"frmlossQty"},{title:"单价（元）",width:100,dataIndex:"productPrice",key:"productPrice"},{title:"总价（元）",width:100,dataIndex:"frmlossAmount",key:"frmlossAmount"},{title:"备注",width:100,dataIndex:"remark",key:"remark"}],t}return(0,M.default)(e,t),(0,O.default)(e,[{key:"componentDidMount",value:function(){this._getAsyncData()}},{key:"_getAsyncData",value:function(){var t=this.props,e=t.handleGetDetailRecord,a=t.match.params;t.history;e({searchParams:{orderCode:a.id}})}},{key:"render",value:function(){var t=this.props,e=t.tableRecordLoading,a=t.searchResultRecord,n=a.header?a.header:"";return console.log(n.shipperName),_.default.createElement("div",{className:"fullOrderDel"},_.default.createElement("span",{className:"ant-modal-close-x close",onClick:this.handleCloseModal}),_.default.createElement("div",{style:{paddingLeft:20}},_.default.createElement(i.default,null,_.default.createElement(E.default,{span:8},_.default.createElement("h4",null,"货主：",n.shipperName)),_.default.createElement(E.default,{span:8},_.default.createElement("h4",null,"报损类型：",n.frmlossTypeName)),_.default.createElement(E.default,{span:8},_.default.createElement("h4",null,"报损总额：",n.frmlossTotalAmount)),_.default.createElement(E.default,{span:24},_.default.createElement("h4",null,"备注：",n.remark)))),_.default.createElement("div",{className:"table-group",style:{margin:0}},_.default.createElement(d.default,{rowKey:function(t){return t.id},loading:e,columns:this.columns,scroll:{x:840,y:400},dataSource:a.item,pagination:!1})))}}]),e}(P.PureComponent))||l;e.default=y,t.exports=e.default}});
//# sourceMappingURL=73.723d3f29f6627b3845c1.js.map