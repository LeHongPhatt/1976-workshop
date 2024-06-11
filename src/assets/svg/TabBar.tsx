import React from 'react';
import Svg, {Path} from 'react-native-svg';

const TabBar = {
  Home: ({
    width = '21',
    height = '22',
    viewBox = '0 0 21 22',
    fill = 'none',
    opacity = 0.6,
    color = 'white',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}>
      <Path
        fillRule={fillrule}
        clipRule={cliprule}
        d="M12.217 14.2913C13.421 14.2913 14.401 15.2643 14.401 16.4603V19.5363C14.401 19.7933 14.607 19.9993 14.871 20.0053H16.777C18.279 20.0053 19.5 18.7993 19.5 17.3173V8.59325C19.493 8.08325 19.25 7.60325 18.833 7.28425L12.24 2.02625C11.355 1.32525 10.117 1.32525 9.229 2.02825L2.681 7.28225C2.248 7.61125 2.005 8.09125 2 8.61025V17.3173C2 18.7993 3.221 20.0053 4.723 20.0053H6.647C6.918 20.0053 7.138 19.7903 7.138 19.5263C7.138 19.4683 7.145 19.4103 7.157 19.3553V16.4603C7.157 15.2713 8.131 14.2993 9.326 14.2913H12.217ZM16.777 21.5053H14.853C13.751 21.4793 12.901 20.6143 12.901 19.5363V16.4603C12.901 16.0913 12.594 15.7913 12.217 15.7913H9.331C8.962 15.7933 8.657 16.0943 8.657 16.4603V19.5263C8.657 19.6013 8.647 19.6733 8.626 19.7413C8.518 20.7313 7.672 21.5053 6.647 21.5053H4.723C2.394 21.5053 0.5 19.6263 0.5 17.3173V8.60325C0.51 7.60925 0.968 6.69925 1.759 6.10025L8.294 0.85525C9.733 -0.28475 11.738 -0.28475 13.174 0.85325L19.756 6.10325C20.529 6.69225 20.987 7.60025 21 8.58225V17.3173C21 19.6263 19.106 21.5053 16.777 21.5053Z"
        fill={color}
        fillOpacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),

  Cart: ({
    width = '21',
    height = '20',
    viewBox = '0 0 21 20',
    fill = 'none',
    opacity = '0.7',
    color = 'white',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}>
      <Path
        fillRule={fillrule}
        clipRule={cliprule}
        d="M6.04437 16.9519C6.75837 16.9519 7.33937 17.5319 7.33937 18.2459C7.33937 18.9599 6.75837 19.5409 6.04437 19.5409C5.33037 19.5409 4.75037 18.9599 4.75037 18.2459C4.75037 17.5319 5.33037 16.9519 6.04437 16.9519ZM17.3247 16.9519C18.0397 16.9519 18.6207 17.5319 18.6207 18.2459C18.6207 18.9599 18.0397 19.5409 17.3247 19.5409C16.6107 19.5409 16.0307 18.9599 16.0307 18.2459C16.0307 17.5319 16.6107 16.9519 17.3247 16.9519ZM1.76857 0.00948704L3.84857 0.369487C4.18357 0.428487 4.43857 0.706487 4.46757 1.04649L4.70257 3.84749L5.57642 3.84786C5.71902 3.84793 5.8601 3.84799 5.99969 3.84805L7.60399 3.84882C7.73188 3.84888 7.85833 3.84894 7.98336 3.84901L9.75475 3.84998C9.86604 3.85004 9.97599 3.85011 10.0846 3.85018L11.326 3.85097C11.4243 3.85103 11.5214 3.8511 11.6172 3.85117L12.709 3.85197C12.7952 3.85204 12.8803 3.85211 12.9641 3.85217L13.9161 3.85299C13.991 3.85306 14.0647 3.85313 14.1375 3.8532L14.7631 3.85382C14.8295 3.85389 14.8949 3.85396 14.9592 3.85403L15.6838 3.85487C15.7403 3.85494 15.7958 3.85501 15.8505 3.85508L16.4622 3.85594C16.5097 3.85601 16.5562 3.85608 16.6019 3.85615L16.9907 3.8568C17.0315 3.85687 17.0714 3.85695 17.1106 3.85702L17.5437 3.8579C17.5768 3.85797 17.6092 3.85804 17.6409 3.85812L17.9074 3.85878C17.935 3.85886 17.962 3.85893 17.9883 3.85901L18.274 3.85991C18.2954 3.85998 18.3163 3.86006 18.3366 3.86014L18.5043 3.86082C18.5214 3.8609 18.5379 3.86097 18.554 3.86105L18.7237 3.86197C18.736 3.86205 18.7479 3.86213 18.7594 3.86221L18.8519 3.86291C18.8611 3.86299 18.8698 3.86307 18.8782 3.86314L18.9448 3.86385C18.9512 3.86393 18.9574 3.86401 18.9632 3.86409L19.0085 3.86481C19.0128 3.86489 19.0168 3.86497 19.0206 3.86505L19.0493 3.86578C19.0519 3.86586 19.0544 3.86594 19.0566 3.86602L19.0774 3.867C19.0787 3.86708 19.0799 3.86716 19.081 3.86725C19.0907 3.86815 19.0921 3.86832 19.0936 3.86849C19.6506 3.94949 20.1406 4.24049 20.4746 4.68849C20.8086 5.13549 20.9486 5.68649 20.8686 6.23849L19.9196 12.7965C19.7406 14.0445 18.6566 14.9855 17.3966 14.9855H6.47557C5.15857 14.9855 4.04357 13.9575 3.93657 12.6425L3.02057 1.74849L1.51357 1.48849C1.10457 1.41649 0.83157 1.02949 0.90157 0.620487C0.97357 0.211487 1.36857 -0.054513 1.76857 0.00948704ZM5.3758 5.34783L4.82857 5.34749L5.43157 12.5195C5.47557 13.0715 5.92657 13.4855 6.47757 13.4855H17.3946C17.9156 13.4855 18.3606 13.0975 18.4346 12.5825L19.3846 6.02349C19.4066 5.86749 19.3676 5.71149 19.2726 5.58549C19.1786 5.45849 19.0406 5.37649 18.8846 5.35449C18.8774 5.35476 18.8601 5.35502 18.8332 5.35524L18.7245 5.35587C18.7017 5.35596 18.6767 5.35605 18.6495 5.35613L18.083 5.35699C18.0352 5.35702 17.9855 5.35705 17.9339 5.35708L16.602 5.35702C16.5276 5.357 16.4519 5.35696 16.3748 5.35693L14.8547 5.35601C14.7637 5.35594 14.6716 5.35587 14.5786 5.3558L13.7184 5.35511C13.6205 5.35503 13.5218 5.35495 13.4224 5.35486L12.5113 5.35406C12.4084 5.35397 12.305 5.35387 12.2012 5.35378L11.5736 5.3532C11.4683 5.35311 11.3627 5.35301 11.2569 5.35291L10.2992 5.35201C10.1924 5.35191 10.0855 5.35181 9.97868 5.35171L9.33804 5.35112C9.23142 5.35102 9.12492 5.35092 9.01861 5.35082L8.38341 5.35025C8.27806 5.35015 8.17303 5.35006 8.06836 5.34997L7.13785 5.34917C7.03592 5.34908 6.93455 5.349 6.83378 5.34892L5.65786 5.34802C5.56296 5.34795 5.46892 5.34789 5.3758 5.34783ZM15.7885 7.54379C16.2025 7.54379 16.5385 7.87979 16.5385 8.29379C16.5385 8.70779 16.2025 9.04379 15.7885 9.04379H13.0165C12.6015 9.04379 12.2665 8.70779 12.2665 8.29379C12.2665 7.87979 12.6015 7.54379 13.0165 7.54379H15.7885Z"
        fill={color}
        fillOpacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),
};

export default TabBar;
