import CardExample from "./CardExample";


 const GridLayout = () => {
   const list = [1, 2, 3, 4, 5];

   const getCards = () => {
     var cards = []
     for (let index = 0; index < list.length; index++) {
       const element = <CardExample></CardExample>
       cards.push(element)
     }

     return cards;
   }
   const state = {
     items: getCards()
   }


   const _createItemList = () => {
     let rows = {};
     let counter = 1;
     state.items.forEach((item, idx) => {
       rows[counter] = rows[counter] ? [...rows[counter]] : [];
       if (idx % 3 === 0 && idx !== 0) {
         counter++;
         rows[counter] = rows[counter] ? [...rows[counter]] : [];
         rows[counter].push(item);
       } else {
         rows[counter].push(item);
       }
     });
     return rows;
   }

   let rows = _createItemList();


   return (
     <section style={{  }} >
       <div >
         {Object.keys(rows).map(row => {
           return (
             <div style={{   display: "flex", justifyContent: "center" }} key={row}>
               {rows[row].map((item) => {
                 return <div style={{padding: 5}} >{item}</div>;
               })}
             </div>
           );
         })}
       </div>
     </section>
   );

 }

 export default GridLayout;