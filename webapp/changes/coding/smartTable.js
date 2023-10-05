/***
@controller Name:fin.gl.documentpost.controller.Posting,
*@viewId:application-adaptationproject-display-component---posting
*/
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension'
		// ,'sap/ui/core/mvc/OverrideExecution'
	],
	function (
		ControllerExtension
		// ,OverrideExecution
	) {
		"use strict";
		return ControllerExtension.extend("customer.app.variant7.smartTable", {
			// metadata: {
			// 	// extension can declare the public methods
			// 	// in general methods that start with "_" are private
			// 	methods: {
			// 		publicMethod: {
			// 			public: true /*default*/ ,
			// 			final: false /*default*/ ,
			// 			overrideExecution: OverrideExecution.Instead /*default*/
			// 		},
			// 		finalPublicMethod: {
			// 			final: true
			// 		},
			// 		onMyHook: {
			// 			public: true /*default*/ ,
			// 			final: false /*default*/ ,
			// 			overrideExecution: OverrideExecution.After
			// 		},
			// 		couldBePrivate: {
			// 			public: false
			// 		}
			// 	}
			// },

			// // adding a private method, only accessible from this controller extension
			// _privateMethod: function() {},
			// // adding a public method, might be called from or overridden by other controller extensions as well
			// publicMethod: function() {},
			// // adding final public method, might be called from, but not overridden by other controller extensions as well
			// finalPublicMethod: function() {},
			// // adding a hook method, might be called by or overridden from other controller extensions
			// // override these method does not replace the implementation, but executes after the original method
			// onMyHook: function() {},
			// // method public per default, but made private via metadata
			// couldBePrivate: function() {},
			// // this section allows to extend lifecycle hooks or override public methods of the base controller
			// override: {
			// 	/**
			// 	 * Called when a controller is instantiated and its View controls (if available) are already created.
			// 	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			// 	 * @memberOf customer.app.variant7.smartTable
			// 	 */
			// 	onInit: function() {
			// 	},

			// 	/**
			// 	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			// 	 * (NOT before the first rendering! onInit() is used for that one!).
			// 	 * @memberOf customer.app.variant7.smartTable
			// 	 */
			// 	onBeforeRendering: function() {
			// 	},

			// 	/**
			// 	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			// 	 * This hook is the same one that SAPUI5 controls get after being rendered.
			// 	 * @memberOf customer.app.variant7.smartTable
			// 	 */
			// 	onAfterRendering: function() {
			// 	},

			// 	/**
			// 	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			// 	 * @memberOf customer.app.variant7.smartTable
			// 	 */
			// 	onExit: function() {
			// 	},

			// 	// override public method of the base controller
			// 	basePublicMethod: function() {
			// 	}
			// }
			onInit: function () {
				var oModel, oView;
	
				this._oMockServer = new DemoMockServer();
	
				oModel = new ODataModel(this._oMockServer.getServiceUrl(), {
					defaultCountMode: "Inline",
					annotationURI: [
						this._oMockServer.getAnnotationUrl()
					]
				});
	
				oView = this.getView();
				oView.setModel(oModel);
			},
	
			onBeforeExport: function (oEvt) {
				var mExcelSettings = oEvt.getParameter("exportSettings");
	
				// Disable Worker as Mockserver is used in Demokit sample
				mExcelSettings.worker = false;
			},
	
			onPaste: function(oEvent) {
				var oResult = oEvent.getParameter("result");
				MessageToast.show("Paste result:" + JSON.stringify(oResult), {
					width: "75vw"
				});
			},
	
			onExit: function () {
				this._oMockServer.stop();
			}
		});
	});