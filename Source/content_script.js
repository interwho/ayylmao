replace(document.body);

function replace(node) {
	var child, next;
	switch ( node.nodeType ) {
		case 1: // Element
		case 9: // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				replace(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	v = v.replace(/\blol\b/g, "ayy lmao");
	v = v.replace(/\bLOL\b/g, "ayy lmao");
	v = v.replace(/\blel\b/g, "ayy lmao");
	textNode.nodeValue = v;
}