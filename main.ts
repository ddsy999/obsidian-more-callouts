import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
import {CalloutPluginManager} from 'scr/CalloutPluginManager'

export default class MoreCalloutPlugin extends Plugin {

    dataCallout : string;
    calloutManager : CalloutPluginManager;

    onload() {
        console.log('Callout plugin loaded');
        this.registerMarkdownPostProcessor((el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
            this.processMoreCallouts(el);
        });
    }

    onunload() {
        console.log('Callout plugin unloaded');
    }

    processMoreCallouts(el: HTMLElement) {
        const calloutElements = el.querySelectorAll('.callout');
        calloutElements.forEach((calloutElement: HTMLElement) => {

        this.calloutManager = new CalloutPluginManager(calloutElement);
        this.calloutManager.convertCallout();
        calloutElement = this.calloutManager.calloutElement;

        });
    }



}








// import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
// import {CalloutPluginManager} from 'scr/CalloutPluginManager'

// export default class MoreCalloutPlugin extends Plugin {

//     dataCallout : string 

//     onload() {
//         console.log('Callout plugin loaded');
//         this.registerMarkdownPostProcessor((el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
//             this.processCallouts(el);
//         });
//     }

//     onunload() {
//         console.log('Callout plugin unloaded');
//     }

//     processCallouts(el: HTMLElement) {
//         const calloutElements = el.querySelectorAll('.callout');
//         calloutElements.forEach((calloutElement: HTMLElement) => {
//             const dataCalloutType = calloutElement.getAttribute('data-callout-type');
//             const dataCallout = calloutElement.getAttribute('data-callout');
//             console.log('type ' + dataCalloutType);
//             console.log('dataCallout ' + dataCallout);
//             const content = calloutElement.innerHTML;
//             console.log('content ' + content);
            
//             // content에 특정 조건을 검사하여 콜아웃의 색상을 변경
//             if (dataCallout === 'new') {
//                 // 'new' 타입의 callout에 대한 추가적인 처리를 수행
//                 console.log('This is a new callout.');
                
//                 // 'new' 타입의 callout 배경색을 노란색으로 변경
//                 calloutElement.style.backgroundColor = 'yellow';
//             }

//             // 'type'에 따라 다른 스타일을 적용할 수 있음
//             if (dataCalloutType === 'special') {
//                 // 'special' 타입의 callout에 대한 추가적인 처리를 수행
//                 console.log('This is a special callout.');
                
//                 // 'special' 타입의 callout 테두리 스타일을 변경
//                 calloutElement.style.border = '2px solid blue';
//             }
//         });
//     }

//     initCallout(el: HTMLElement){
//         const calloutElements = el.querySelectorAll('.callout');

//         calloutElements.forEach((calloutElement: HTMLElement) => {
//             const dataCalloutType = calloutElement.getAttribute('data-callout-type');
//             const dataCallout = calloutElement.getAttribute('data-callout');
//             console.log('type ' + dataCalloutType);
//             console.log('dataCallout ' + dataCallout);
//             const content = calloutElement.innerHTML;
//             console.log('content ' + content);
            
//             // content에 특정 조건을 검사하여 콜아웃의 색상을 변경
//             if (dataCallout === 'new') {
//                 // 'new' 타입의 callout에 대한 추가적인 처리를 수행
//                 console.log('This is a new callout.');
                
//                 // 'new' 타입의 callout 배경색을 노란색으로 변경
//                 calloutElement.style.backgroundColor = 'yellow';
//             }

//             // 'type'에 따라 다른 스타일을 적용할 수 있음
//             if (dataCalloutType === 'special') {
//                 // 'special' 타입의 callout에 대한 추가적인 처리를 수행
//                 console.log('This is a special callout.');
                
//                 // 'special' 타입의 callout 테두리 스타일을 변경
//                 calloutElement.style.border = '2px solid blue';
//             }
//         });



//     }


// }
