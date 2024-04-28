import { CardAnnonce } from '../card/CardAnnonce'
export const ListAnnonce = ({ annonces }) => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 '>
        {annonces && annonces.map((annonce) => (
          <CardAnnonce key={annonce.id} projet={annonce.attributes} />
        ))}
      </div>
    </div>
  )
}
