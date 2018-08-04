# The Document Object Modle

## DOM hierarchy
Any HTML or XML document can be
represented as a hierarchy of nodes using the
DOM. <br>

Consider the following html file, 
```html
<html>
  <head>
  <title>Sample Page</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```
the dom hierarchy can be illurstrated as
![DOM hierachy](./includes/01.figure_dom_hierarchy.png).<br><br>


## Node Type
Node can be accessed at **window** Object. All the node types are constants and binded on **Node.prototype**.
<br>
![DOM hierachy](./includes/02.Node.prototype.png).

All the HTML Node is a instance of Node Class and they have a **nodeType** property.

```javascript
console.log(`document is a instance of Node: ${document instanceof Node}`)

console.log(`document.nodeType: ${document.nodeType}`)
```
<br>

#### some most usuaslly used node types
- Node.ELEMENT_NODE(1) (html node)
- Node.ATTRIBUTE_NODE (2) (attribute node)
- Node.TEXT_NODE (3)  (text node)
- Node.COMMENT_NODE (8) (comment node)
- Node.DOCUMENT_NODE(9) (document node)
- Node.DOCUMENT_FRAGMENT_NODE (11) (document fragment)
<br>

#### The nodeName and nodeValue Properties
***For elements, nodeName is always equal to the element’s tag name, and nodeValue is always null.***

```javascript
console.log(document.body.nodeName)
console.log(document.nodeName)
console.log(document.documentElement.nodeName)
```


## Node Relationships

![DOM hierachy](./includes/03.node_relationships.png).<br>

As all the html node is an instance of **Node** Class. so some properties and functions of a node can be reckoned from **Node.prototype**. <br>

- **ChildNodes**
<br>Each node has a property **childNodes** which contains a NodeList. NodeList is an array-like object used to store an ordered list of nodes that are accessible by position.<br>
It is often said that a NodeList is a living, breathing object rather than a snapshot of what happened at
the time it was first accessed.<br>
- **parentNode**
- nextSibling, previousSibling
- firstChild, lastChild
- Detect a node has child node or not
```javascript
someNode.hasChildNodes()
```






