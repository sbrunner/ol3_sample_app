var layers = new ol.Collection([
  new ol.layer.TileLayer({
    source: new ol.source.Stamen({
      layer: 'watercolor'
    })
  }),
  new ol.layer.TileLayer({
    source: new ol.source.Stamen({
      layer: 'terrain-labels'
    })
  })
]);
var map = new ol.Map({
  layers: layers,
  renderers: ol.RendererHints.createFromQueryData(),
  scaleLineControl: true,
  target: 'map',
  view: new ol.View2D({
    center: new ol.Coordinate(0, 0),
    zoom: 3
  })
});


var tabpane = new goog.ui.TabPane(goog.dom.getElement('tabs'));
tabpane.addPage(new goog.ui.TabPane.TabPage(new goog.ui.Textarea().getElement(), 'p1'));
tabpane.addPage(new goog.ui.TabPane.TabPage(new goog.ui.Textarea().getElement(), 'p2'));


var header = goog.dom.getElement('header');
var tabs = goog.dom.getElement('tabs');
var toolbar = goog.dom.getElement('toolbar');
var split = goog.dom.getElement('split');
var statusbar = goog.dom.getElement('statusbar');
var map = goog.dom.getElement('map');

function resize() {
    var header_height = goog.style.getBorderBoxSize(header).height;
    var toolbar_height = goog.style.getBorderBoxSize(toolbar).height;
    var tabs_width = goog.style.getBorderBoxSize(tabs).width;
    var split_width = goog.style.getBorderBoxSize(split).width;
    var statusbar_height = goog.style.getBorderBoxSize(statusbar).height;
    var doc_size = goog.dom.getViewportSize();

    goog.style.setWidth(map, doc_size.width - tabs_width - split_width);
    goog.style.setHeight(map, doc_size.height - header_height - statusbar_height - toolbar_height);
    goog.style.setWidth(toolbar, doc_size.width - tabs_width);
    goog.style.setWidth(statusbar, doc_size.width - tabs_width);
    goog.style.setHeight(tabs, doc_size.height - header_height);
    goog.style.setHeight(split, doc_size.height - header_height - statusbar_height - toolbar_height);
}
