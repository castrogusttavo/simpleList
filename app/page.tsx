'use client';

import { Button } from '@/app/components/button';
import { CreateNewListInput, CreateNewTaskInput } from '@/app/components/input';
import { ListContainer } from '@/app/components/listContainer';
import { Progress } from '@/app/components/progress';
import { ColorPicker } from '@/app/components/radioButton';
import { SearchBar } from '@/app/components/searchBar';
import { TaskContainer } from '@/app/components/taskContainer';
import { Title } from '@/app/components/title';
import { Add01Icon } from '@houstonicons/pro';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <Title>Home</Title>
      <Progress totalTasks={3} completedTasks={0} />
      <Progress totalTasks={5} completedTasks={1} />
      <CreateNewListInput />
      <CreateNewTaskInput />
      <Button>
        <Add01Icon
          color='#F7F7F7'
          size={24}
          type={'rounded'}
          variant={'stroke'}
          strokeWidth={1.5}
        />
      </Button>
      <SearchBar />
      <ColorPicker
        values={['r1', 'r2', 'r3']}
        bgPicker={['#FFF', '#000', '#282828']}
      />
      <TaskContainer name={'Promote Bento Card'} id={'complete'} />
      <ListContainer name={'Upcoming'} iconName={'delete-02'} totalTasks={5} />
    </div>
  );
}
