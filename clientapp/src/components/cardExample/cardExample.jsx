import React from "react";
import {
  Avatar,
  Card,
  Flex,
  Text,
  CardBody,
  CardHeader,
} from "@fluentui/react-northstar";
import { AuthContext } from "../../contexts/authContext";

export default function CardExample() {
  const { authToken, setAuthToken } = React.useContext(AuthContext);
  return (
    <div>
      <Card>
        <CardHeader>
          <Flex gap="gap.small">
            <Avatar
              image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
              label="Dynamic Factors Strategist"
              name="Eda Thiel"
              status="unknown"
            />
            <Flex column>
              <Text content="Eda Thiel" weight="bold" />
              <Text content="Dynamic Factors Strategist" size="small" />
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          Qui explicabo voluptas. Enim aut deleniti. Voluptatem tempora et vitae
          modi molestiae suscipit soluta sunt ab.
        </CardBody>
      </Card>
    </div>
  );
}
