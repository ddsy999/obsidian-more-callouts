import { MarkdownPostProcessorContext } from "obsidian";

export class CalloutPluginManager {
    
    // callout elements 
    public dataCallout : string|null; // callout prefix 
    public calloutElement : HTMLElement; // callout HTML 
    public calloutContent : string |undefined; // callout Content
    
    // constructor 
    constructor(calloutElement: HTMLElement){
        this.calloutElement = calloutElement;
        this.dataCallout = calloutElement.getAttribute('data-callout');
        this.calloutContent = this.calloutElement?.querySelector('.callout-content')?.innerHTML;
    }

    convertCallout() {
        switch (this.dataCallout) {
            case "proof":
                this.converCalloutToProof();
                break;
            default:
                break;
        }
    }

    converCalloutToProof(){
        // calloutContentElement : object , select .callout-content
        const calloutContentElement = this.calloutElement?.querySelector('.callout-content');
        if (calloutContentElement) {
            // Clone .callout-content 
            const clonedContent = calloutContentElement.cloneNode(true);
            // Delete the original .callout-content 
            calloutContentElement.remove();
            // Create <details> 
            const details = document.createElement('details');
            // Create <summary> & Move .callout-content 
            const summary = document.createElement('summary');
            details.appendChild(summary);
            // Add a clone of the .callout-content element as a child of the <details> element
            details.appendChild(clonedContent);
            // Add a <details> element to this.calloutElement
            this.calloutElement.appendChild(details);
        }else {
            console.error('Callout content element not found.');
        }
    }
    
    // Changing color blue then this.calloutElement.style.backgroundColor = 'blue';
}