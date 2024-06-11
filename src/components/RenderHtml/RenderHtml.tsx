import React, {useCallback, useMemo} from 'react';
import HTML, {TNodeChildrenRenderer} from 'react-native-render-html';
import {StyleSheet} from 'react-native';
import {dimensions} from 'utils';
import {TextCus} from 'components';
import {Colors} from 'theme';

interface IProps {
  content: string;
  source?: string;
  widthImage?: string;
  style?: any;
  numberOfLine?: number;
  baseStyle?: any;
}
const {width: contentWidth} = dimensions;
const regexInlineStyle = /style=(["'])(?:(?=(\\?))\2.)*?\1/g;
const NOT_USE_NUMBER_OF_LINE = 0;
const RenderHtml: React.FC<IProps> = ({
  content,
  source,
  widthImage = '',
  style,
  numberOfLine = NOT_USE_NUMBER_OF_LINE,
  baseStyle,
}) => {
  const contentNoInlineStyle = useMemo(
    () =>
      content === null
        ? ''
        : (
            content?.replace(
              /<p>(\s|(&nbsp;))*<\/p>|<li>(\s|(&nbsp;))*<\/li>/gim,
              '',
            ) + ''
          ).replace(regexInlineStyle, ''),
    [content],
  );
  const tagsStyles = useMemo(() => {
    return {
      ...tagStyle,
      ...style,
    };
  }, [style]);
  const htmlSource = useMemo(() => {
    return source
      ? {uri: source}
      : {
          html: content === null ? '' : contentNoInlineStyle || '<p></p>',
        };
  }, [content, contentNoInlineStyle, source]);
  const PRenderer = useCallback(
    ({TDefaultRenderer, textProps, ...props}) => {
      const tchildrenAreText = props.tnode.children.every(
        t => t.type === 'text' || t.type === 'phrasing',
      );
      const children = <TNodeChildrenRenderer tnode={props.tnode} />;
      return (
        <TDefaultRenderer
          {...props}
          textProps={{...textProps, numberOfLine: 2}}>
          {tchildrenAreText ? (
            <TextCus
              // style={baseStyle}
              allowFontScaling={false}
              numberOfLines={numberOfLine}>
              {children}
            </TextCus>
          ) : (
            children
          )}
        </TDefaultRenderer>
      );
    },
    [numberOfLine],
  );

  const renderers = useMemo(
    () => ({
      p: PRenderer,
    }),
    [PRenderer],
  );
  return (
    <HTML
      source={htmlSource}
      contentWidth={contentWidth}
      tagsStyles={tagsStyles}
      ignoredStyles={['width', 'height', 'color']}
      renderers={renderers}
      baseStyle={baseStyle}
      classesStyles={styles}
      renderersProps={renderersProps}
    />
  );
};
const tagStyle = {
  h2: {
    color: Colors.white,
    lineHeight: 32,
  },
  p: {
    marginBottom: 0,
  },
  strong: {
    marginBottom: 0,
  },
  img: {
    width: contentWidth,
  },
  figure: {
    marginHorizontal: 0,
    marginBottom: 0,
  },
};
const styles = StyleSheet.create({
  image: {
    overflow: 'hidden',
  },
});
const renderersProps = {
  img: {
    enableExperimentalPercentWidth: true,
  },
};
export default RenderHtml;
