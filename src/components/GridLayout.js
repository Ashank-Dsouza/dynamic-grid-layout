import CardExample from "./CardExample";
import PropTypes from 'prop-types';

 const GridLayout = (props) => {

   const state = {
     items: props.children
   }
   console.log("the cildren are: ", props.children);


   const _createItemList = () => {
     let rows = {};
     let counter = 1;
     state.items.forEach((item, idx) => {
       rows[counter] = rows[counter] ? [...rows[counter]] : [];
       if (idx % props.rowLength === 0 && idx !== 0) {
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
     <section  >
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

 GridLayout.propTypes = {
  rowLength: PropTypes.number.isRequired
};