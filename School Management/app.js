/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'School',

    extend: 'School.Application',

    requires: [
        'School.view.main.ReOrderTab'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //

launch:function(){
    viewport=Ext.getCmp('viewport');
    target = viewport.down('#viewport-target');
    view = Ext.create('School.view.main.ReOrderTab');
    target.add(view)
},

    mainView: 'School.view.main.ReOrderTab',
    autoCreateViewport:true

    //-------------------------------------------------------------------------
    // Most customizations should be made to School.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
