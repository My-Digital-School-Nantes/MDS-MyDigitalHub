import { CardTheme } from '@/components/quizz/CardTheme'
import client from '@/graphql/apolloClient'
import { GET_QUIZZTHEME } from '@/graphql/queries/quizz'

async function getTheme () {
  try {
    const response = await client.query({
      query: GET_QUIZZTHEME
    })
    return response.data.quizzThemes.data
  } catch (error) {
    console.log(error)
  }
}

export default async function Page () {
  const theme = await getTheme()

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-4 my-5'>
        <h2 className='text-center'>
          Bienvenue dans "Quiz Master Challenge" !
        </h2>
        <p>
          Plongez dans un monde de connaissances et de défis mentaux où vos compétences sont mises à l'épreuve à chaque question.

          Dans ce jeu de quiz captivant, votre objectif est de répondre correctement à une série de questions à choix multiples, couvrant une variété de sujets allant de la science à l'histoire en passant par la culture pop. Vous serez confronté à des énigmes stimulantes qui testeront votre mémoire, votre logique et votre culture générale.

          Démarrez votre aventure en solo ou défiez vos amis dans des duels passionnants pour découvrir qui est le véritable maître du quiz. Avec des centaines de questions soigneusement élaborées et des mises à jour régulières du contenu, chaque partie est une expérience unique et enrichissante.

          Que vous soyez un amateur de trivia chevronné ou un novice curieux, "Quiz Master Challenge" offre une expérience de jeu engageante et divertissante pour tous les joueurs. Alors, êtes-vous prêt à relever le défi et à devenir le prochain maître du quiz ? Rejoignez-nous dès maintenant et montrez au monde l'étendue de vos connaissances !
        </p>
      </div>

      <div className='grid grid-cols-2 gap-10'>
        {theme?.map((theme) => (
          <CardTheme key={theme.id} theme={theme.attributes} />
        ))}
      </div>
    </div>
  )
}
