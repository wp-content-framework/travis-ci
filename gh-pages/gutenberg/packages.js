const a11y = require( "@wordpress/a11y" );
const annotations = require( "@wordpress/annotations" );
const apiFetch = require( "@wordpress/api-fetch" );
const autop = require( "@wordpress/autop" );
const blob = require( "@wordpress/blob" );
const blockDirectory = require( "@wordpress/block-directory" );
const blockEditor = require( "@wordpress/block-editor" );
const blockLibrary = require( "@wordpress/block-library" );
const blockSerializationDefaultParser = require( "@wordpress/block-serialization-default-parser" );
const blockSerializationSpecParser = require( "@wordpress/block-serialization-spec-parser" );
const blocks = require( "@wordpress/blocks" );
const components = require( "@wordpress/components" );
const compose = require( "@wordpress/compose" );
const coreData = require( "@wordpress/core-data" );
const data = require( "@wordpress/data" );
const dataControls = require( "@wordpress/data-controls" );
const date = require( "@wordpress/date" );
const deprecated = require( "@wordpress/deprecated" );
const dom = require( "@wordpress/dom" );
import domReady from "@wordpress/dom-ready";
const editPost = require( "@wordpress/edit-post" );
const editSite = require( "@wordpress/edit-site" );
const editor = require( "@wordpress/editor" );
const element = require( "@wordpress/element" );
const escapeHtml = require( "@wordpress/escape-html" );
const formatLibrary = require( "@wordpress/format-library" );
const hooks = require( "@wordpress/hooks" );
const htmlEntities = require( "@wordpress/html-entities" );
const i18n = require( "@wordpress/i18n" );
const icons = require( "@wordpress/icons" );
const isShallowEqual = require( "@wordpress/is-shallow-equal" );
const keyboardShortcuts = require( "@wordpress/keyboard-shortcuts" );
const keycodes = require( "@wordpress/keycodes" );
const listReusableBlocks = require( "@wordpress/list-reusable-blocks" );
const mediaUtils = require( "@wordpress/media-utils" );
const notices = require( "@wordpress/notices" );
const nux = require( "@wordpress/nux" );
const plugins = require( "@wordpress/plugins" );
const primitives = require( "@wordpress/primitives" );
const priorityQueue = require( "@wordpress/priority-queue" );
const reduxRoutine = require( "@wordpress/redux-routine" );
const richText = require( "@wordpress/rich-text" );
const serverSideRender = require( "@wordpress/server-side-render" );
const shortcode = require( "@wordpress/shortcode" );
const tokenList = require( "@wordpress/token-list" );
const url = require( "@wordpress/url" );
const viewport = require( "@wordpress/viewport" );
const warning = require( "@wordpress/warning" );
const wordcount = require( "@wordpress/wordcount" );
const lodash = require( "lodash" );

window.wp = window.wp || {};
window.wp.a11y = window.wp.a11y || a11y;
window.wp.annotations = window.wp.annotations || annotations;
window.wp.apiFetch = window.wp.apiFetch || apiFetch;
window.wp.autop = window.wp.autop || autop;
window.wp.blob = window.wp.blob || blob;
window.wp.blockDirectory = window.wp.blockDirectory || blockDirectory;
window.wp.blockEditor = window.wp.blockEditor || blockEditor;
window.wp.blockLibrary = window.wp.blockLibrary || blockLibrary;
window.wp.blockSerializationDefaultParser = window.wp.blockSerializationDefaultParser || blockSerializationDefaultParser;
window.wp.blockSerializationSpecParser = window.wp.blockSerializationSpecParser || blockSerializationSpecParser;
window.wp.blocks = window.wp.blocks || blocks;
window.wp.components = window.wp.components || components;
window.wp.compose = window.wp.compose || compose;
window.wp.coreData = window.wp.coreData || coreData;
window.wp.data = window.wp.data || data;
window.wp.dataControls = window.wp.dataControls || dataControls;
window.wp.date = window.wp.date || date;
window.wp.deprecated = window.wp.deprecated || deprecated;
window.wp.dom = window.wp.dom || dom;
window.wp.domReady = window.wp.domReady || domReady;
window.wp.editPost = window.wp.editPost || editPost;
window.wp.editSite = window.wp.editSite || editSite;
window.wp.editor = window.wp.editor || editor;
window.wp.element = window.wp.element || element;
window.wp.escapeHtml = window.wp.escapeHtml || escapeHtml;
window.wp.formatLibrary = window.wp.formatLibrary || formatLibrary;
window.wp.hooks = window.wp.hooks || hooks;
window.wp.htmlEntities = window.wp.htmlEntities || htmlEntities;
window.wp.i18n = window.wp.i18n || i18n;
window.wp.icons = window.wp.icons || icons;
window.wp.isShallowEqual = window.wp.isShallowEqual || isShallowEqual;
window.wp.keyboardShortcuts = window.wp.keyboardShortcuts || keyboardShortcuts;
window.wp.keycodes = window.wp.keycodes || keycodes;
window.wp.listReusableBlocks = window.wp.listReusableBlocks || listReusableBlocks;
window.wp.mediaUtils = window.wp.mediaUtils || mediaUtils;
window.wp.notices = window.wp.notices || notices;
window.wp.nux = window.wp.nux || nux;
window.wp.plugins = window.wp.plugins || plugins;
window.wp.primitives = window.wp.primitives || primitives;
window.wp.priorityQueue = window.wp.priorityQueue || priorityQueue;
window.wp.reduxRoutine = window.wp.reduxRoutine || reduxRoutine;
window.wp.richText = window.wp.richText || richText;
window.wp.serverSideRender = window.wp.serverSideRender || serverSideRender;
window.wp.shortcode = window.wp.shortcode || shortcode;
window.wp.tokenList = window.wp.tokenList || tokenList;
window.wp.url = window.wp.url || url;
window.wp.viewport = window.wp.viewport || viewport;
window.wp.warning = window.wp.warning || warning;
window.wp.wordcount = window.wp.wordcount || wordcount;
window.lodash = window.lodash || lodash;
