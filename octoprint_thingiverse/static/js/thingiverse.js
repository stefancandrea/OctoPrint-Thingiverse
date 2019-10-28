/*
 * View model for OctoPrint-Thingiverse
 *
 * Author: Stefan Candrea
 * License: AGPLv3
 */
$(function() {
    function ThingiverseViewModel(parameters) {
        var self = this;
        $('#tab_plugin_thingiverse_link').hide();
        $('li#tab_plugin_thingiverse_link > a').html('<div class="thingiverse_logo"></div>Thingiverse');

        self.settingsViewModel = parameters[0];
        self.url = ko.observable();
        self.enabled = ko.observable();

        self.onBeforeBinding = function() {
			self.enabled(self.settingsViewModel.settings.plugins.thingiverse.enabled());
            self.url(self.settingsViewModel.settings.plugins.thingiverse.url());
        }

        self.onAfterBinding = function() {
            _enable(self.enabled())
        }

		self.onEventSettingsUpdated = function(payload) {
			self.enabled(self.settingsViewModel.settings.plugins.thingiverse.enabled());
            _enable(self.enabled())
        }
    }

    function _enable(value) {
        if (value)
            $('#tab_plugin_thingiverse_link').show();
        else
            $('#tab_plugin_thingiverse_link').hide();
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: ThingiverseViewModel,
        dependencies: ["settingsViewModel"],
        elements: ["#tab_plugin_thingiverse", "#settings_plugin_thingiverse"]
    });
});
