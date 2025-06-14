// Based on LibreWolf v7.10
// https://codeberg.org/librewolf/settings/src/tag/7.10/librewolf.cfg

/** [CATEGORY] PRIVACY */

/** [SECTION] ISOLATION */
user_pref("browser.contentblocking.category", "strict");
user_pref("network.cookie.cookieBehavior", 5); // enforce dFPI
user_pref("privacy.purge_trackers.enabled", true);
user_pref("privacy.partition.serviceWorkers", true); // isolate service workers
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);

/** [SECTION] CACHE AND STORAGE */
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.helperApps.deleteTempFileOnExit", true); // delete temporary files opened with external apps

/** [SECTION] HISTORY AND SESSION RESTORE */
user_pref("privacy.history.custom", true);
user_pref("browser.privatebrowsing.autostart", false);
user_pref("browser.formfill.enable", false); // disable form history

/** [SECTION] QUERY STRIPPING */
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");

/** [SECTION] LOGGING */
user_pref("browser.dom.window.dump.enabled", false);
user_pref("devtools.console.stdout.chrome", false);

/** [CATEGORY] NETWORKING */

/** [SECTION] HTTPS */
user_pref("dom.security.https_only_mode_pbm", true); // only allow https in private browsin
user_pref("network.auth.subresource-http-auth-allow", 1); // credential dialogs from same site only

/** [SECTION] REFERERS */
user_pref("network.http.referer.defaultPolicy", 2);
user_pref("network.http.referer.defaultPolicy.pbmode", 0);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.http.sendSecureXSiteReferrer", false);

/** [SECTION] PROXY */
user_pref("network.gio.supported-protocols", ""); // disable gio as it could bypass proxy
user_pref("network.file.disable_unc_paths", true); // hidden, disable using uniform naming convention to prevent proxy bypass
user_pref("network.proxy.socks_remote_dns", true); // forces dns query through the proxy when using one
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // force webrtc inside proxy when one is used

/** [SECTION] DNS */
user_pref("network.dns.disablePrefetch", true); // disable dns prefetching
user_pref("network.dns.skipTRR-when-parental-control-enabled", false); // Arkenfox user.js v117
user_pref("network.trr.mode", 2); // DoH with system dns fallback

/** [SECTION] PREFETCHING AND SPECULATIVE CONNECTIONS */
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);
// disable speculative connections and domain guessing from the urlbar
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);


/** [CATEGORY] FINGERPRINTING */

/** [SECTION] RFP */
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // prevents rfp from breaking AMO
user_pref("browser.display.use_system_colors", false); // default but enforced due to RFP
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.resistFingerprinting.letterboxing", false);

/** [SECTION] WEBGL */
user_pref("webgl.disabled", true);

/** [CATEGORY] SECURITY */

/** [SECTION] SITE ISOLATION */
user_pref("fission.autostart", true);

/** [SECTION] CERTIFICATES */
user_pref("security.cert_pinning.enforcement_level", 2); // enable strict public key pinning, might cause issues with AVs
// enable safe negotiation and show warning when it is not supported. might cause breakage.
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.OCSP.require", true); // set to hard-fail, might cause SEC_ERROR_OCSP_SERVER_ERROR

/** [SECTION] TLS/SSL */
user_pref("security.tls.enable_0rtt_data", false); // disable 0 RTT to improve tls 1.3 security
user_pref("security.tls.version.enable-deprecated", false); // make TLS downgrades session only by enforcing it with user_pref()
// show relevant and advanced issues on warnings and error screens
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/** [SECTION] PERMISSIONS */
user_pref("permissions.delegation.enabled", false); // force permission request to show real origin
user_pref("permissions.manager.defaultsUrl", ""); // revoke special permissions for some mozilla domains

/** [SECTION] SAFE BROWSING */
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");

/** [SECTION] OTHERS */
user_pref("network.IDN_show_punycode", true); // use punycode in idn to prevent spoofing
user_pref("pdfjs.enableScripting", false); // disable js scripting in the built-in pdf reader



/** [CATEGORY] REGION */

/** [SECTION] LOCATION */
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [LINUX]
user_pref("geo.enabled", false); // ignore sites asking for location
user_pref("geo.wifi.uri", "");

/** [SECTION] LANGUAGE */
user_pref("javascript.use_us_english_locale", true);
user_pref("intl.accept_languages", "en-US, en");
// disable region specific updates from mozilla
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);


/** [CATEGORY] BEHAVIOR */

/** [SECTION] DRM */
user_pref("media.eme.enabled", false); // master switch for drm content
user_pref("media.gmp-manager.url", "data:text/plain,"); // prevent checks for plugin updates when drm is disabled
// disable the widevine and the openh264 plugins
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);

/** [SECTION] SEARCH AND URLBAR */
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.separatePrivateDefault", true); // [FF70+] // Arkenfox user.js v119
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]  // Arkenfox user.js v119
user_pref("browser.search.serpEventTelemetry.enabled", false);

user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);

user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.sponsoredTopSites", false);

/** [SECTION] DOWNLOADS */
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.autohideButton", false); // do not hide download button automatically
user_pref("browser.download.manager.addToRecentDocs", false); // do not add downloads to recents
user_pref("browser.download.alwaysOpenPanel", false); // do not expand toolbar menu for every download, we already have enough interaction

/** [SECTION] AUTOPLAY */
user_pref("media.autoplay.blocking_policy", 2);
user_pref("media.autoplay.default", 5);

/** [SECTION] POP-UPS AND WINDOWS */
/**
 * prevent scripts from resizing existing windows and opening new ones, by forcing them into
 * new tabs that can't be resized as well.
 */
user_pref("dom.disable_window_move_resize", true);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

/** [SECTION] MOUSE */
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // prevent mouse middle click on new tab button to trigger searches or page loads


/** [CATEGORY] EXTENSIONS */

/** [SECTION] USER INSTALLED */
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("extensions.enabledScopes", 5); // hidden
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.quarantinedDomains.enabled", false);

/** [SECTION] SYSTEM */
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");

/** [SECTION] SHOPPING */
// disable the fakespot shopping sidebar
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.shopping.experience2023.optedIn", 2);
user_pref("browser.shopping.experience2023.active", false);

/** [CATEGORY] BUILT-IN FEATURES */

/** [SECTION] UPDATER */
user_pref("app.update.auto", false);

/** [SECTION] LOCKWISE */
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.formlessCapture.enabled", false);

/** [SECTION] CONTAINERS */
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/** [SECTION] DEVTOOLS */
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.remote.adb.extensionURL", "");
user_pref("devtools.selfxss.count", 0); // required for devtools console to work

/** [SECTION] OTHERS */
user_pref("accessibility.force_disabled", 1); // block accessibility services
user_pref("webchannel.allowObject.urlWhitelist", ""); // remove web channel whitelist
user_pref("services.settings.server", "https://%.invalid"); // set the remote settings URL (REMOTE_SETTINGS_SERVER_URL in the code)


/** [CATEGORY] UI */

/** [SECTION] FIRST LAUNCH */
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "about:blank");
user_pref("startup.homepage_welcome_url", "about:blank");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.shell.checkDefaultBrowser", false);

/** [SECTION] NEW TAB PAGE */
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// hide pocket and sponsored content, from new tab page and search bar
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}"); // hide buggy pocket section from about:preferences#home
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // disable telemetry in Firefox Home
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}"); // hide stories UI in about:preferences#home, empty highlights list
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // default
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", true);
user_pref("browser.newtabpage.introShown", true);

/** [SECTION] ABOUT */
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
// ...about:addons recommendations sections and more
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("lightweightThemes.getMoreURL", ""); // disable button to get more themes
// ...about:preferences#home
user_pref("browser.topsites.useRemoteSetting", false); // hide sponsored shortcuts button
// ...and about:config
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
// hide about:preferences#moreFromMozilla
user_pref("browser.preferences.moreFromMozilla", false);

/** [SECTION] RECOMMENDED */
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

/** [SECTION] POCKET */
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);


/** [CATEGORY] TELEMETRY */
user_pref("toolkit.telemetry.unified", false); // master switch
user_pref("toolkit.telemetry.enabled", false);  // master switch
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false); // default
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false); // default
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.coverage.opt-out", true); // hidden
user_pref("toolkit.telemetry.coverage.opt-out", true); // hidden
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("browser.ping-centre.telemetry", false);
// opt-out of normandy and studies
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.startupExperimentMigrated", true);
user_pref("app.shield.optoutstudies.enabled", false);
// disable personalized extension recommendations
user_pref("browser.discovery.enabled", false);
// disable crash report
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");
// disable connectivity checks
user_pref("network.connectivity-service.enabled", false);
// disable captive portal
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");
// disable Privacy-Preserving Attribution
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);

user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.url", "");

/** [CATEGORY] CUSTOM */
user_pref("browser.bookmarks.showMobileBookmarks", true);

// put a limit on the cache size and compress
user_pref("browser.cache.compression_level", 1);
user_pref("browser.cache.disk.capacity", 1048576);
user_pref("browser.cache.memory.max_entry_size", 1048576);

// fonts
user_pref("browser.display.use_document_fonts", 0);
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("font.default.x-western", "sans-serif");
user_pref("font.minimum-size.x-western", 14);
user_pref("font.name.monospace.x-western", "Ubuntu Mono");
user_pref("font.size.monospace.x-western", 14);

// ui
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("ui.prefersReducedMotion", 1);

user_pref("browser.compactmode.show", true); // smaller ui
user_pref("browser.uidensity", 1);
user_pref("browser.tabs.animate", false);
user_pref("browser.tabs.autoHide", false);

user_pref("accessibility.typeaheadfind.autostart", false);
user_pref("accessibility.typeaheadfind.flashBar", 0);

// webrtc
user_pref("media.peerconnection.enabled", false);

// gpu acceleration
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.ffvpx.enabled", false);

user_pref("permissions.default.desktop-notification", 2); // never allow sites to ask for notifications

user_pref("mousewheel.system_scroll_override.enabled", false); // dont touch the scroll amount

user_pref("dom.event.contextmenu.enabled", false); // dont let websites override context menu

user_pref("dom.battery.enabled", false);
