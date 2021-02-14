import React from "react";
import PropTypes from "prop-types";

export default function ThumpsUp(props) {
  const { width, height, className } = props;
  return (
    <svg
      className={`${width || "w-6"} ${
        height || "h-6"
      } ${className} fill-current inline-block`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQ2ElEQVR4AdSUA7QkRxiFO07PxLbXtr2btc3Ytm3bNp9t27ZtGze36o+TpzhzzneqOV0XVcb/7dfmNfLAVs8RY5ucz1rb7jPmqhaPYbc0u55zU6PTGfvq7U5dXPPNCUcTY7DIwb9Mi/uwExqdz1pYa3PSxaUfHn5LxadH3Vf5xTFPlrx/2LN5b5gvFL5jeb7O9uQnKfQ9is7sDZ8DJKwCkjYK8SuBqIXoCZuJdp+xdbXfnvht8XvWPcQYCDn4F2BiMyjqkQaH0wKa3c5rb/UcCYpDh994dPhPQLvvONTbn4bSj45Ao+MZ+l5X0FQgZjGQvB1IvZhcAhkvBFL28voOIHGDNkK9W/bREZ8jasHhxOgLOfiH6AmfbW10OvMSinXuDpnR1Rs5D4hdQpYBccuZJFFj7FL0RsxFne0poFlodjtXzKEx/A9JPfUCcrGgjlP2kT1iAv+jM3Ayqr8+HjVfn3AxMfpCDgaAjh5JR5cice0pxBgyTIHr9sLukOm5SjCvcaJbyDZJM2WXoI6TNrHeq4HI+WD1UfSOFVzvaPEYDhrHFkyhQBqWslNS1+wW4er/kjYoQ3VbGhxPR/Yrpicx+kIO+qHDb9wyrs/MevtTlaOd1V8dF8JKPsa1tqsndOYUpmgSoy+aXM5ezDqnM1URp8Xuk9pKjX/GxSIscT34LjKeN1H4tgUNDqeD6x/8L7R5jWLFZ7EtK/jcOm0WExdTohfq92i0Nox7CZIeNbOI0Rdy0AeIWXIdAaLms5Jz9B+zhrqOTENXkztvZe23J31ZZ3fKLZ3+Ezd1BU+dwUSOJ0r8paysTFQllHIBROilv+IyGQkTlRTZgLSnTWS/bKLy82NQ/dXx5Dh+7xSwTeC39H7R5j0K3ESVOUz8DHAeqPj8aOS/ZSrxCL/VakOMvvjdi0i9fD8mdAWT6lWJSLW2qGRk9407X9zmOmUaupacjDKGExqtKtvGSabyuU6p+L5fCb+sDy4lF0hTohch6yUTCQ+aHMWInFdM5L4mrVDLI+8NuZ7+rImUx00kPiLPR99lQdB1h8PjkiN74x8wVxKjL373IicznHT9NOFLIFykU2RKv1qza6CbwtQ6AydpQ7hRyXN8pw/RfRhwobzL3Z7t0kIibrMi6g6LHiNvl2OO+jz8FiH0xsMQcsNh8L/6CDhfcBQ+23LUd93bY7wrWRYF8Gr3fboZ27btL2PbM23btm3btm3btm13zfpPZv8mue3+vWTwYZ1KciuVc9bZe22c99pjZ5+0XdC8GAxjgYBTX3qiveRUGPqtmEyNfeZvtfiXTQBr4TKsi2nb0UP/3mlPyQLtMGtIroAcf2+TGLG8hM2Pt48d81HuwR1amnXX7q+//PadOwfk+r3cM13QjMXYDyz+cy810ZcmpfDKnkEEWRaBozfC2HWbjrS3bDex9ToJTksQnzzh00Ilonrwk5YlclHfT+SJe37VvfIILnNJ1vfel0PAfiYzdNTuX/Srlv/bUb5+526vs6OJAu8TCWgM64i1/cb9hQqJrE8kAaG2yCSOrOeOoOlF35tM4rWZzOX/CQKIHxeysyKHnb4hBLg+ctj720cT1h45/P1M3IK4WuUR4DVYdC9Yhef5nucJjb8LmoKhgICPZTIPDHvx9EKYtCiTJaS37TjaXr/5CF9ukypbvOgSa3i3NJkViP++4wqiU+9rWSZhDmFfQGB7Q0LjxauMrBY0BUOB+X+fKQ7R7Pm9TI4PS2JEELGducripLJt6gaLJ3wIIX4yPWQhog8+4/uQRM3ihWg64JntpWuMLB00BUOhiWqvalLDWrwQafESH2Ev9YFEy463l66eySYRYgmpGNtUilH111F2bsGk3VuI2H2mB5+uz0UIGhIhTRRZcYQlfSVoCoZCEwE50qTsigm+NF49WbV4MV8OYbdMXKprty5OYiPO2zWuUImP16LCHbu8RoYYkeyiyEnGGMLe1CIMWNBNKaguXGGkPWfJcacGTS/63kQ5r6GiIOHhm0VIP2aCImAsGS9JjO9SbEpOpaXZqjeLt1spk1t1wOEzjkpmWknOqQtMaE8LXL0/ed6JcoMgny84QWIkA/w3lhzXnrfMSAsnzj3Rc46Ni40fW6v0vclu3GtSUOoqLtupIkbIQQ4gp/z4+YmC/ny/6ndhit+L11Rd2KP2zNsuiv/nLi0JGm2PnHm0PSkLlgFekJ1Ezi1JhrgGa6EJahMgdmqUlN0tzWAdnnXleiPbxmKmD5pe9L1JZfUAf5TzayyA99JdEKOLnCpHqxYvlOUUxloNonxPiFK2Eq3afQqvB6DoYfKKISZ/V3IB+YDqzmuLEykUacKmPkLm3guWJZ8gjFyLeHrWPZetNTJDNmKKoIHGUEhIuV3cLIx9qM8q80KI0AWsZKylIAb6SZihdt8z7H4Jn52j9vyXL/N34Mcsg3hJhIgfvWA99ZtjkiCf/cEm2SzzFBZFFySwhifyex8NGmgMhdx4iVTyOTi/F/X5j8s6/FiRMYaIXouoxXcTHs+wOymfW0pN+Zm/lJfAXb5ONwJobZWJI0EmyGoQYKFFvt+2YJZVFktgWbOcAGlIvr5bQW4ZNGAoIOAYpsOkeuEBY+HzXiLKNXpJqN1BRC0eMe4tAirul/gxdSnwJauNtLfv1OHHdh4JfJsF+A7zRoIFQtUBlQAV3FdNEgRwLeHwzqCBxlDIonZ4gUXzNRCvweseIn70kiRYfJlpWUARwP/5tWKHaKnxU5ZLXUvoEOQeNYFMUB+CC9V89CdkfRbruSILS4H26VO/5HcQyK1EhvuCBgwFBKxmUS+5eOzXj57zHff0kvAC2tDbv/ut3TNhLsCsLY7/6+RqcKjxXcV8OsAVWIhrm7MAwsmsLRAZOsEWKvOTJVpw+1TucR+NQbLncK3zlh05MmigMRSePvXLM2C1YIG9qM9NHDCtR++zIoHvIeGFdKEIIIJINGkhEAFd9e8uXOwW2y9fq5sE0QVgIRbCIpg0lwAuwlUePPhdtKQP3EjSxP/PWWokneYJPwkaaAyF5Mzfxio2sVomxJwstse0qhUm9SxzpLZlCYiozm8R8XzdW8/S37Mg6s/sxXm9vHb/P3W68X9xSU3XLeQB2l92UpZYSJz3mVyffih6+Lqrz1zlEXBANmtc0IChIB3+dLrAj1pU4iwTYk4x0y8wLUJS8DnWtZ4VG0VCWQJhssgioY8IrxGkkkMqMxUFJEDSVkWQyZ+cFtcxs03SFpPtSYwshki6185yidppYa5qBucJ7pU5tkfNMvrsQX/pnHjYDKML5u9TBE2hMRRySvP2mOKNj5RpJfT0tpxCjsUWNBm0p5gda+hzh4oQiJBA9RJR8dnfudbTITi/lcm/pb1tp1Flqx1tr9n4n+bqN2gD80c4n0a43wuB34Bey7RBSHVMpooUTZ7J87aOyE4dNL3oe5Odnvq2HSedqYCgyNjEcojxwxIV2RpzpajuYX5t+m78EQnKUPrAv0WIHhJ+gYiK1d5XM9V3EGqy8gATtsuyPnPwOwSQj1sYV+vPSnvgM3/zm34fOQi7J89IR/mhPPP7QVMw9OHK9UdWqxOZm7YOYko5pFRO2gXJSSY4WtUYU7VbFLx9NNaCBLsgHNndsgaqX0SANBsBootJiga+z5Q9nwlbtPc2APmsUeYoV+FKRPX58adKjpDhN1gvC6IPD2du73reYgiy2KmVoupxYuO1KxAX4FuUmq8SJ2ptx+wW9yFq1J1/cwm7bNK0ARFQJzosBVnuZwWsixA6FEWAxZcVPhQLkAMwdaRWtufaj1/Va9GG2HILFsQK5BlrPG8mWDhtoQnrU2Hl5wtAnLZwaq1ao86KDSbMPSyGb/NTLiF3cHxl0eA1Yuo4q6KKGG+Cqj0a4yRIgeTKDf1dcYNc3/WMXthtV8SCgskcRCuibaPM9dKgAcNYEMM3Hj3r6I1RzfaQHDIUDv5rFwfBX7o4MNjtNx1Kq2+PYa5hJ4mnRUlYTNhkgm5OgRCvK5+ojI34ciklbI7cSgOAynsuQUZuJULPi0qOuIw5cAH6ZX4XhoCgAcML4av7/bHz+O6/7bS7Z4F7/b7T7vm7zhP7/KHzwL5/7NyQ61lZ9EGH/L2zzQlzTVzugD93Fs2VJvgRwshvZWB2zERMymL5vIW7eg/+ZkEIYAHiNvUX0iRILAsZ0mL3VBuMKIKQ3QthvFpjooFCyrO4sOiyQdCA4QWRHX1z4u+nMqGPZFfencW98Y6dXzMh76d4PtcJIfOI2UigDwTTrtEFLkHoatf6GpkVvv5FABE+dxm603Ur4lu9AFZBGIVemqA2UC4z74KIBFVA5dCUVVaNIYf5WNCAYbIhzE+Vc7kt06Z6libUMRYfNpmxJBRq95k1AhKKpcBaW47GSnC5BUKIpCglR+hi28oVKkp1CnkvrxjnGQS7tfuJRlMHDRgmK2KqU0Q7NtarKxIUNHWszWzLHcpPa/F81T1KYlWbjtD5y3bz9/QsASlJZ12DpMj5mwzR4kChA4iz2yypDlQfjlvNFzS9MAwEx8w6ae3TF5rwrDN6u0cTJDqEEQksQXpt4V5X1cZ0qyUmt6/j7rhiUuOJiqRnEoH2zOJmyPNnzHXO3LNg6oWlQsRKWfzq0a81XONCy4SUObIRP46VvCloxsIwEETlp0wev5zdIjx2lB+WMFJlIkWswGsxnj/zdeYuBzk3O2zxZy4y/o6Y8Swx6fcHzeSCYaAICRvaQckTEmSQ4jlh1AdARM8hRuXuBIsLyTdYwc6xktcFzeSGYaBIkTNtwuNmMU/CRsRYAmVm7s707TxUY4QIKon5vDOAa4JmUDAMBQmPJ9tRSQ7lVnBJaoiexKaXAIrOYojXFeuMzBk0g4JhKEizY2IWdLMag38TxTroZAVCJALEdwRckvtyNCZsfSFoBgXD0JDuzoxJkp7m39Xr0wiRqVXGxiq4AKLi/8Lop4JmUDAMFfHri7iBEhsBMjVCWGHQe0IpceECIetXQTMoGIaKJC+/tDg6gAAaYPHKVeGQS2h3sRLRIxazXdAMCoah46KVRp6R6Oj5P9LTSUKCpofKT8g8P0lQrOCeoBkUDENHkpv1CKFwyOQlQd1i6Et0QO2gGyURksISy/cGzSBgGDqSE/wooigSKG+FQbsPCLBgIkkH5PqsYZ6gGQQMQ0fy958goA4/6UC14IVCBGiJEcuIpqRop6AZBAxDR3Z1GU0TBKgSZYQiAFdI5ogA7XEhUGWHhANjDVMGzeSGYdgghAfRAARofOrWVDrMGhBQ9UAqO2XtUckPpg2ayQ3DsKFcfiTndEVAkp/3Un/mLwyOJUBRdGQ6R9MEzeSGYahIkjNRluf0hwjWQaeF232ta6Tc1tUAu88F9gqaQcAwVGhOaHRoT9e/AVQeW7j+nlrAZw5k8u95RAFELBs0g4BhmBAC11PqSoQQ4ERY3BcOLd5ZgFRYlIhWONyUH3wiaAYBw1CRFtVVCKjTH4u148ze4ajkyN/0A8/q9vwuD5pBwTAsqAU+lPT2AQmOKKAeKBKc27nq9iJI+EvPT5foW0EzKBiGBdXgz2IBTxLBvJbhcQVZHxBGjVDC5/iNFWzXXjb7lEEzKBiGhrTDvplq8FGdISRckcXWf4hy1QUKQRavBrg833mT7/2/EABaY8crcJg4IlIZOlO063xeD9CB69lpjb02aAYNw1ARU39zOsUnpb9f/wC6/vGz96xixRywdIJmGDAMHQl30yfE/TEkrJnzxM3TNd445r9UIsAng2aY+AfMv3a1NnlCYwAAAABJRU5ErkJggg=="
      />
    </svg>
  );
}

ThumpsUp.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
