"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[8426],{73942:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return u}});var o,a=n(87462),r=n(63366),i=(n(15007),n(64983)),d=n(91515),s=["components"],p={},l=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:p},m=d.Z;function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.mdx)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"api-key-connection"},"API Key Connection"),(0,i.mdx)("p",null,"A small collection of Adobe services (e.g. Adobe Stock) require authorization, but do not require authentication. These services can be called ",(0,i.mdx)("em",{parentName:"p"},"“anonymously”")," and typically provide consistent results regardless of the application or user that made the request. An ",(0,i.mdx)("strong",{parentName:"p"},"API Key")," is the only client credential required for these services. These connections do not need to pass an access token with each request."),(0,i.mdx)("p",null,"To obtain an API Key, you'll need to create an API Key connection using the Adobe Developer Console."),(0,i.mdx)(l,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"If your application needs to access Adobe services or content on behalf of a user or an Adobe enterprise organization, it needs additional credentials for authentication. For more information, read the ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"OAuthIntegration.md"},"OAuth Authentication"))," and ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"ServiceAccountIntegration.md"},"Service Account (JWT) Authentication"))," documentation."),(0,i.mdx)("p",null,"This article will walk you through the steps to set up an ",(0,i.mdx)("strong",{parentName:"p"},"API Key")," connection."),(0,i.mdx)("h2",{id:"api-key-connection-workflow"},"API Key connection workflow"),(0,i.mdx)("h3",{id:"step-1-create-a-project-in-adobe-developer-console"},"Step 1: Create a project in Adobe Developer Console"),(0,i.mdx)("p",null,'Integrations are now created as part of a "project" within Adobe Developer Console. For complete steps to creating a project in Console, begin by reading the ',(0,i.mdx)("a",{parentName:"p",href:"../getting-started.md"},"Adobe Developer Console getting started guide")," and ",(0,i.mdx)("a",{parentName:"p",href:"../projects/index.md"},"projects overview"),". "),(0,i.mdx)("p",null,"Once you have created a project, you will be able to add services including APIs, I/O Events, and I/O Runtime."),(0,i.mdx)("h3",{id:"step-2-add-an-api-to-your-project-using-api-key-authorization"},"Step 2: Add an API to your project using API Key authorization"),(0,i.mdx)("p",null,"To add an API that uses API Key authorization, follow the steps outlined in the guide for ",(0,i.mdx)("a",{parentName:"p",href:"../services/services-add-api-key.md"},"adding an API to a project using API Key authorization"),"."),(0,i.mdx)("p",null,"When the API has been successfully connected, you will be able to access the newly generated API Key."),(0,i.mdx)("h3",{id:"step-3-try-it"},"Step 3: Try It"),(0,i.mdx)("p",null,"Copy the API Key from the Adobe Developer Console project and replace ",(0,i.mdx)("inlineCode",{parentName:"p"},"myAPIKey")," in the sample request below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-curl"},"curl 'https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US%26search_parameters%5Bwords%5D=kittens '\n  -H 'x-api-key:myAPIKey'\n  -H 'x-product:myTestApp1.0'\n")),(0,i.mdx)("p",null,"Open Postman and go to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Import"),"->",(0,i.mdx)("inlineCode",{parentName:"p"},"Paste Raw Text")," and paste the curl command. Select ",(0,i.mdx)("strong",{parentName:"p"},"Import")," to import it."),(0,i.mdx)("kbd",null,"![api-key-5](./Images/api-key-5.png)"),(0,i.mdx)("p",null,"Select ",(0,i.mdx)("strong",{parentName:"p"},"Send"),". You will receive a successful response. Note that you did not need an access token in order to make a successful request using API Key integration."),(0,i.mdx)("kbd",null,"![api-key-7](./Images/api-key-7.png)"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-api-key-integration-md-74aacf523c1e937d4705.js.map