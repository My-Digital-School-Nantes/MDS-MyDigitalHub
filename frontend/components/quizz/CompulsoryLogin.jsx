export function CompulsoryLogin () {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='p-6 max-w-sm w-full bg-white shadow-md rounded-lg text-center'>
        <h1 className='text-lg font-bold mb-4'>Connexion Requise</h1>
        <p className='mb-4'>Vous devez vous connecter pour accéder à cette page.</p>
        <button>
          Se connecter
        </button>
      </div>
    </div>
  )
}
