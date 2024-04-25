import { Card, CardBody } from '@nextui-org/react'
import Link from 'next/link'

export function CardTheme ({ theme }) {
  return (
    <Card key={theme.id}>
      <CardBody>
        <Link href={`/quizz/${theme.slug}`}>
          {theme.name}
        </Link>
      </CardBody>
    </Card>
  )
}
