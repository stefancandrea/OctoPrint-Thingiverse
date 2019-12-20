# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin


class ThingiversePlugin(octoprint.plugin.SettingsPlugin, octoprint.plugin.AssetPlugin, octoprint.plugin.TemplatePlugin):
	def get_settings_defaults(self):
		return dict(
			enabled=True,
			url="https://www.thingiverse.com/"
		)

	def get_assets(self):
		return dict(
			js=["js/thingiverse.js", "js/x-frame-bypass.js"],
			css=["css/thingiverse.css"],
			less=["less/thingiverse.less"]
		)

	def get_template_configs(self):
		return [
			dict(type="settings", custom_bindings=False)
		]

	def get_update_information(self):
		return dict(
			thingiverse=dict(
				displayName="Thingiverse Plugin",
				displayVersion=self._plugin_version,
				type="github_release",
				user="stefancandrea",
				repo="OctoPrint-Thingiverse",
				current=self._plugin_version,
				pip="https://github.com/stefancandrea/OctoPrint-Thingiverse/archive/{target_version}.zip"
			)
		)


__plugin_name__ = "Thingiverse Plugin"


def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = ThingiversePlugin()

	global __plugin_hooks__
	__plugin_hooks__ = {
		"octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
	}
