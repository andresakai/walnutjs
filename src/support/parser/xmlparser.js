const xpath = require('xpath');
const { DOMParser } = require('xmldom');
const { XMLSerializer } = require('xmldom');

const serializer = new XMLSerializer();

const xmlparser = {

  xmlContent: null,
  xmlContentEdited: '',

  /**
   * Set the current xmlContent
   */
  init: (xmlContent) => {
    this.xmlContent = xmlContent;
  },

  /**
   * Returns the value from a Tag (find by xpath)
   */
  getTagValue: (xpathExpression) => {
    const doc = new DOMParser().parseFromString(this.xmlContent);
    const node = xpath.select(xpathExpression, doc);
    return node[0].textContent;
  },

  /**
   * Set the value for a Tag (find by xpath)
   */
  setTagValue(path, value) {
    const mdoc = new DOMParser().parseFromString(this.xmlContent, 'text/xml');
    const mnode = xpath.select(path, mdoc);

    mnode[0].textContent = value;
    this.xmlContentEdited = serializer.serializeToString(mdoc);
  },
};

module.exports = xmlparser;
