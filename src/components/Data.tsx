import { useQuery } from "@apollo/client"
import { GET_NODES, IData } from "../utils/mutations"
import { useLogoutError } from "../hooks/useLogoutError"
import useInfiniteScroll from "../hooks/useInfiniteScroll"

export const Data = () => {
  const logoutOn401 = useLogoutError()

  const { loading, data, error, fetchMore } = useQuery(GET_NODES, {
    variables: { first: 4, after: null },
    onError: logoutOn401
  })

  const items = (data as IData)?.Admin?.Tree?.GetContentNodes?.edges
  const info = (data as IData)?.Admin?.Tree?.GetContentNodes?.pageInfo

  useInfiniteScroll(
    () =>
      fetchMore({
        variables: { first: 4, after: info?.endCursor },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult
          return {
            Admin: {
              ...fetchMoreResult.Admin,
              Tree: {
                ...fetchMoreResult.Admin.Tree,
                GetContentNodes: {
                  ...fetchMoreResult.Admin.Tree.GetContentNodes,
                  edges: [
                    ...previousResult.Admin.Tree.GetContentNodes.edges,
                    ...fetchMoreResult.Admin.Tree.GetContentNodes.edges
                  ]
                }
              }
            }
          }
        }
      }).catch(logoutOn401),
    info?.hasNextPage,
    info?.endCursor
  )

  return (
    <>
      <div style={{ padding: 40, borderRadius: 10, border: "1px solid white" }}>
        {loading ? "...loading" : "fetchMore"}
      </div>
      {error && <div>{JSON.stringify(error)}</div>}
      <div>
        {items?.map((item) => {
          // i would have liked to try this as a component wrapped in memo
          // had no more time...
          // a log in the memo would indicate recalculation
          // chrome would be able to show rerendering via Rendering.PaintFlashing
          // a given onClick (e.g. goToThisPath) would usually be wrapped in useCallBack
          return (
            <div key={item.node.id} style={{ border: "3px solid grey", borderRadius: 10, minHeight: "30vh" }}>
              <div dangerouslySetInnerHTML={{ __html: item.node.structureDefinition.title }}>{}</div>
              <div dangerouslySetInnerHTML={{ __html: item.node.description }}>{}</div>
              {item?.node?.image?.url && (
                <img style={{ width: "100%" }} src={item.node.image.url} alt="image according to the title"></img>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
