import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import config from 'src/config';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(payload: object): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: config.ACCESS_TOKEN_KEY,
      expiresIn: config.ACCESS_TOKEN_TIME,
    });
  }

  async generateRefreshToken(payload: object): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: config.REFRESH_TOKEN_KEY,
      expiresIn: config.REFRESH_TOKEN_TIME,
    });
  }
}

