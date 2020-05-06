import { getRepository } from 'typeorm';
import User from '../infra/typeorm/entities/User';
import fs from 'fs';
import path from 'path';

import uploadConfig from '@config/upload';

import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  avatar_filename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatar_filename }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated can change avatar.');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatar_filename;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
