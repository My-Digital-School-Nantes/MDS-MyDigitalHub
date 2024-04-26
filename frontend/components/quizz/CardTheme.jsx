import { Card, CardBody } from '@nextui-org/react'
import Link from 'next/link'

export function CardTheme ({ theme }) {
  return (
    <Card key={theme.id} className='py-6' isHoverable>
      <CardBody>
        <Link href={`/quizz/${theme.url}`} className='text-center'>
          {theme.name}
        </Link>
      </CardBody>
    </Card>
  )
}
