interface IColors {
  darkBlue: string;
  lightBlue: string;
  titleDarkBlue: string;
  iconsBackground: string;
  titleLightBlue: string;
  textDarkGray: string;
  textWhite: string;
  backgroundPageColorWhite: string;
}

interface IFontFamily {
  regular: string;
  semiBold: string;
  bold: string;
}

export const COLORS: IColors = {
  darkBlue: '#0E5899',
  // primaryLight: '#2F80ED',
  lightBlue: '#90b9ef',
  iconsBackground: '',
  titleDarkBlue: '#0E5899',
  titleLightBlue: '#2F80ED',
  textDarkGray: '#8E96A1',
  textWhite: '#FFFFFF',
  backgroundPageColorWhite: '#F2F2F2',
};

export const FONT_FAMILY: IFontFamily = {
  regular: 'Nunito_400Regular',
  semiBold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
};
