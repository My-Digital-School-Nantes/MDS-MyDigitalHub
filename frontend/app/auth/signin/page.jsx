import LoginForm from '@/components/forms/LoginForm'

export const dynamic = 'force-dynamic'

export default function Auth () {
  return (
    <>
      <h1 className='text-4xl text-center my-8'>Authentification</h1>
      <LoginForm />
    </>
  )
}
