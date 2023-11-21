// WITH JS destructuring
// function CoreConcept({image, title, description}) {
//   return (
//     <li>
//       <img src={image} alt={description} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }

// CUSTOM props name
// function CoreConcept({concept}) {
//   return (
//     <li>
//       <img src={concept.image} alt={concept.description} />
//       <h3>{concept.title}</h3>
//       <p>{concept.description}</p>
//     </li>
//   );
// }
export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
