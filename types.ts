
export type NodeType = 'root' | 'internal' | 'leaf';

export interface DecisionTreeNode {
  id: string;
  type: NodeType;
  label: string;
  condition?: string;
  isResult?: boolean;
  children?: DecisionTreeNode[];
}
