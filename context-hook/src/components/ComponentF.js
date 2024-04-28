import React from "react";
import { userContext, channelContext } from "../App";

function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Use context value {user}, channel context value {channelContext}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentF;
