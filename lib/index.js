/**
 * @fileoverview Adds photoshop environment to eslint
 * @author Stan
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


module.exports = {
  environments: {
    photoshop: {
      globals: {
        app: false,
        activeDocument: false,
        backgroundColor: false,
        build: false,
        colorSettings: false,
        displayDialogs: false,
        documents: false,
        fonts: false,
        foregroundColor: false,
        freeMemory: false,
        locale: false,
        macintoshFileTypes: false,
        measurementLog: false,
        name: false,
        notifiers: false,
        notifiersEnabled: false,
        path: false,
        playbackDisplayDialogs: false,
        playbackParameters: false,
        preferences: false,
        preferencesFolder: false,
        recentFiles: false,
        scriptingBuildDate: false,
        scriptingVersion: false,
        systemInformation: false,
        typename: false,
        version: false,
        windowsFileTypes: false,
      },
    },
  },
};

