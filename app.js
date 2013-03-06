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
