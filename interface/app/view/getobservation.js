/*
 * File: app/view/getobservation.js
 * Date: Wed Apr 18 2012 13:50:28 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */


Ext.define('istsos.view.getobservation', {
    extend: 'istsos.view.ui.getobservation',

    initComponent: function() {
        var me = this;
        
        this.store = Ext.create('Ext.data.Store', {
            storeId: 'qistore',
            autoLoad: this.istService=='default'?false:true,
            proxy: {
                type: 'ajax',
                url: Ext.String.format('{0}/istsos/services/{1}/dataqualities',wa.url, this.istService),
                reader: {
                    type: 'json',
                    idProperty: 'code',
                    root: 'data'
                }
            },
            fields: [
            {
                name: 'code'
            },            
            {
                name: 'name'
            },
            {
                name: 'description'
            },
            {
                name: 'display',
                convert: function(v, record){
                    return record.get('code') + " - " + record.get('name') + " (" + record.get('description') + ")";
                }
            }
            ]
        });
        
        me.callParent(arguments);
        
        if (this.istService!='default') {
            Ext.getCmp('getobsconfig').add([{
                xtype: 'checkboxfield',
                name: 'transactional_log',
                fieldLabel: 'Transactional request logger',
                boxLabel: 'Enabled if checked',
                inputValue: 'True',
                uncheckedValue: 'False',
                anchor: '100%'
            },{
                xtype: 'combobox',
                name: 'defaultqi',
                fieldLabel: 'Default quality index',
                displayField: 'display',
                forceSelection: true,
                queryMode: 'local',
                store: 'qistore',
                typeAhead: true,
                valueField: 'code',
                anchor: '100%'
            },
            {
                xtype: 'combobox',
                name: 'correct_qi',
                fieldLabel: 'Correct quality index',
                displayField: 'display',
                forceSelection: true,
                queryMode: 'local',
                store: 'qistore',
                typeAhead: true,
                valueField: 'code',
                anchor: '100%'
            },
            {
                xtype: 'combobox',
                name: 'stat_qi',
                fieldLabel: 'Stat. quality index',
                displayField: 'display',
                forceSelection: true,
                queryMode: 'local',
                store: 'qistore',
                typeAhead: true,
                valueField: 'code',
                anchor: '100%'
            },
            {
                xtype: 'combobox',
                name: 'aggregatenodataqi',
                fieldLabel: 'Aggregation no-data quality index',
                displayField: 'display',
                forceSelection: true,
                queryMode: 'local',
                store: 'qistore',
                typeAhead: true,
                valueField: 'code',
                anchor: '100%'
            }]);
        //Ext.getCmp('defaultqi').setVisible(false);
        //Ext.getCmp('aggregatenodataqi').setVisible(false);
        }else{
            Ext.getCmp('getobsconfig').add([{
                xtype: 'textfield',
                name: 'defaultqi',
                fieldLabel: 'Default quality index',
                anchor: '100%'
            },
            {
                xtype: 'textfield',
                name: 'correct_qi',
                fieldLabel: 'Correct quality index',
                anchor: '100%'
            },
            {
                xtype: 'textfield',
                name: 'stat_qi',
                fieldLabel: 'Stat. quality index',
                anchor: '100%'
            },
            {
                xtype: 'textfield',
                name: 'aggregatenodataqi',
                fieldLabel: 'Aggregation no-data quality index',
                anchor: '100%'
            }]);
        }
        Ext.getCmp('getobsconfig').add([{
            xtype: 'textfield',
            name: 'aggregatenodata',
            fieldLabel: 'Aggregation no-data value',
            anchor: '100%'
        }]);
    }
});
