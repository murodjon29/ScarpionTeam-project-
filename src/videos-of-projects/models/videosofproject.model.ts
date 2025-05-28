import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Project } from 'src/projects/models/project.model';

@Table({ tableName: 'videos_of_projects' })
export class VideosOfProjects extends Model<VideosOfProjects> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })

  @ForeignKey(() => Project)
  @Column({ type: DataType.INTEGER })
  project_id: number;

  @BelongsTo(() => Project)
  project: Project;

  @Column({ type: DataType.STRING })
  url: string;
}
