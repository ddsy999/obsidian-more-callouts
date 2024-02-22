import { MarkdownPostProcessorContext, Plugin } from 'obsidian';

export default class CalloutPlugin extends Plugin {
    onload() {
        console.log('Callout plugin loaded');
        this.registerMarkdownPostProcessor((el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
            this.processCallouts(el);
        });
    }

    onunload() {
        console.log('Callout plugin unloaded');
        
    }

    processCallouts(el: HTMLElement) {
        const calloutElements = el.querySelectorAll('.callout');
        calloutElements.forEach((calloutElement: HTMLElement) => {
            const type = calloutElement.getAttribute('data-callout-type');
            const type1 = calloutElement.getAttribute('data-callout');
            console.log('type ' + type);
            console.log('type1 ' + type1);
            const content = calloutElement.innerHTML;
            console.log('content ' + content);
            
            // content에 특정 조건을 검사하여 콜아웃의 색상을 변경
            if (type1==='new') {
                calloutElement.style.backgroundColor = 'yellow';
            }
    
            const calloutHTML = this.generateCalloutHTML(type, content);
            calloutElement.outerHTML = calloutHTML;
        });
    }

    generateCalloutHTML(type: string|null, content: string): string {
        return `<div class="callout callout-${type}">${content}</div>`;
    }
}
