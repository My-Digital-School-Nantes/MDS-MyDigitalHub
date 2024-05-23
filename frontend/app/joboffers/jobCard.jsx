import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Popover, PopoverTrigger, Button, Tooltip, ScrollShadow } from '@nextui-org/react'

const colors = [
  'default', 'primary', 'secondary', 'success', 'warning', 'danger', 'foreground'
]

const JobCard = ({ item }) => (
  <Card className='border border-transparent hover:border-primary w-1/3'>
    <CardHeader className='flex gap-4'>
      <Image
        alt='mds logo'
        height={40}
        radius='sm'
        src='http://localhost:1337/uploads/logomds_c5516472bc.webp'
        width={40}
      />
      <div className='flex flex-col'>
        <p className='text-md'>My Digital School</p>
        <p className='text-small text-default-500'>mydigitalschool.com</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody className=''>
      <h2 className='text-xl text-center my-8'>{item.attributes.title}</h2>
      <div className='description flex flex-col gap-3 justify-normal'>
        <p><strong>Description:</strong></p>
        <ScrollShadow className='w-[490px] h-[200px] overflow-auto'>
          <div>
            {item.attributes.description && item.attributes.description.map((paragraph, index) => (
              <p key={index}>{(paragraph.children.map(child => child.text))}</p>
            ))}
          </div>
        </ScrollShadow>
        <p><strong>Skills:</strong></p>
        <div className='flex flex-wrap gap-4'>
          {Array.isArray(item.attributes.skills) && item.attributes.skills.map((skill, index) => (
            <Tooltip key={index} content={skill}>
              <Button variant='flat' color={colors[index % colors.length]} className='capitalize'>
                {skill}
              </Button>
            </Tooltip>
          ))}
        </div>
        <p><strong>Education:</strong> {Array.isArray(item.attributes.education) ? item.attributes.education.join(', ') : item.attributes.education}</p>
        <p><strong>Start Date:</strong> {item.attributes.start_date}</p>
      </div>
    </CardBody>
    <Divider />
    <Popover>
      <PopoverTrigger>
        <Button color='success' className='capitalize'>
          Apply
        </Button>
      </PopoverTrigger>
      Application successfully send!
    </Popover>
    <CardFooter />
  </Card>
)

export default JobCard
