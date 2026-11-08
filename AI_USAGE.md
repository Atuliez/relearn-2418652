# AI usage log

# Always commit
git add .
git commit -m "Add AI usage log"
git push

## Week 1
- Tool(s):
- What I asked for: -
- What I kept, changed or rejected, and why: -
- One thing the AI got wrong and how I fixed it: -

## Week 2
- Tool(s): Duck.ai
- What I asked for: Adding feature
- What I kept, changed or rejected, and why:I kept most of the code suggestion for the popularity sort
- One thing the AI got wrong and how I fixed it:-

## Week 3
- Tool(s): Duck.ai
- What I asked for: Adding feature, Reorganize my code (App.jsx)
- What I kept, changed or rejected, and why: I kept the oganization due to the fact that when I ran the code it was having probekms on calling a yet declared variables a lot. Additionally, initially the sorting for popularity was not working but the prices was working. A day later somehow the code worked after being re run. 
- One thing the AI got wrong and how I fixed it: -

## Week 4
- Tool(s): Duck.ai
- What I asked for (summarized due to repeated questions and rejected fixes regarding errors): 
+ Help with my Lab4,
+ There is error: Uncaught Error: useCart must be used inside a CartProvider,
+ Why my pages are gone, 
+ There is error:  Uncaught TypeError: nextCreate is not a function at CartProvider 
+ There is error: ERR_ABORTED 500 (Internal Server Error)
+ Why there is double pages printed, the first printed web does not work but the 2nd does, it still same?
+ I need the route to HomePage,
+ Why is my CartPage not loading, 
+ Help me, why is my display kinda strecthd (attached a screenshot) *2 times
+ fix my vendor page that displays a specifc vendors menu
+ WHy is mmy git npt updating??

- What I kept, changed or rejected, and why:
+ All the added coddes for lab 4 while deleting -dom,
+ Adjusted CartProvider wrap in App.jsx
+ Wrong loccation import.I rjected the hange suggestions on an cart pages... Mainly, due to me oversight that the whole few days my error was the import directed to componenets insteand of pages CartPage.jsx. Nevermind, apparently therre wasnt supposed to be duplicates
+ Updated const value in CartProvider
+ Fixed import typo
+ It suggests removing main from APp.jsx, however doing so rids of menulist thus rejected. Then, it suggests moving it into Route, akso rejected because the web stops working. There was a duoble page, header, footer due to it being declared in layout already so I deleted the header and foooter from APp.jsx after trial and error of deleting/adjusting header, body, footer. The AI most likely did not detect it due to the fact I did not paste my Layout.jsx into the new chat.
+ Updated HomePage to display the vendors and menus.
+ Inconcsitent labelling, changed the labels from item into line in cart item
+ FIxed by adding className for the display for both homepage and cart page ( and added a new index cart-page)
+ Updated the code in VendorPage accordingly