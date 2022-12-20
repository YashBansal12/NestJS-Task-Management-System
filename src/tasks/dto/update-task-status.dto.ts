import { TaskStatus } from '../task-status.enum';
import { IsEnum } from 'class-validator';

export class updateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
