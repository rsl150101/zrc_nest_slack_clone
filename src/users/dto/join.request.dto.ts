import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class JoinRequestDto {
  @IsEmail()
  @ApiProperty({
    example: 'kim@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'kim',
    description: '닉네임',
    required: true,
  })
  public nickname: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '******',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
