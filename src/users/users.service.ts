import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

import { Users } from 'src/entities/Users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getUsers() {}
  async join(email: string, nickname: string, password: string) {
    if (!email) {
      throw new HttpException('No Email', 400);
    }
    if (!nickname) {
      throw new HttpException('No Nickname', 400);
    }
    if (!password) {
      throw new HttpException('No Password', 400);
    }
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('Exist User', 401);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
