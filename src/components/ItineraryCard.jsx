

export default function ItineraryCard( itinerary ) {
  return (
    <div>
     <h1>
          <p>{ itinerary.name }</p>
     </h1>
     <img src={itinerary.photo} alt={itinerary.name} />

    </div>
  )
}
