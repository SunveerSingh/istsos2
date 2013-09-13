/*
 * File: app/view/ui/ChartContainer.js
 * Date: Fri Sep 13 2013 10:56:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.ChartContainer', {
    extend: 'Ext.panel.Panel',
    requires: [
        'istsos.view.Chart'
    ],

    border: 0,
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'chart'
                }
            ]
        });

        me.callParent(arguments);
    }
});