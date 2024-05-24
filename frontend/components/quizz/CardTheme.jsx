import { Card, CardBody } from '@nextui-org/react'
import Link from 'next/link'

export function CardTheme ({ theme }) {
  return (
    <Link href={`/quizz/${theme.slug}`} className='text-center'>
      <Card key={theme.id} className='py-6' isHoverable>
        <CardBody className='text-center'>
          {theme.name}
        </CardBody>
      </Card>
    </Link>
  )
}
