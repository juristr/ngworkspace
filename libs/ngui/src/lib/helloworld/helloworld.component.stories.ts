import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HelloworldComponent } from './helloworld.component';

export default {
  title: 'HelloworldComponent',
  component: HelloworldComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HelloworldComponent>;

const Template: Story<HelloworldComponent> = (args: HelloworldComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}